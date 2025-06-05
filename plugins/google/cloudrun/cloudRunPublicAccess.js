var async = require('async');
var helpers = require('../../../helpers/google');

module.exports = {
    title: 'Cloud Run Public Access',
    category: 'Cloud Run',
    domain: 'Serverless',
    severity: 'High',
    description: 'Ensure Cloud Run services are not publicly invokable.',
    more_info: 'Allowing unauthenticated invocations exposes Cloud Run services to anyone on the internet.',
    link: 'https://cloud.google.com/run/docs/authenticating/service-to-service',
    recommended_action: 'Require authentication for all Cloud Run services.',
    apis: ['run:services', 'run:servicesgetIamPolicy'],
    realtime_triggers: ['run.googleapis.com.Service.Create', 'run.googleapis.com.Service.Update', 'run.googleapis.com.Service.Delete'],

    run: function(cache, settings, callback) {
        var results = [];
        var source = {};
        var regions = helpers.regions();

        var regionList = regions.regions || regions.all_regions || [];
        if (!regionList.length) regionList = Object.keys(regions.zones || {});

        async.each(regionList, function(region, rcb) {
            var services = helpers.addSource(cache, source, ['run', 'services', region]);

            if (!services) return rcb();

            if (services.err || !services.data) {
                helpers.addResult(results, 3,
                    'Unable to query Cloud Run services: ' + helpers.addError(services), region, null, null, services.err);
                return rcb();
            }

            if (!services.data.length) {
                helpers.addResult(results, 0, 'No Cloud Run services found', region);
                return rcb();
            }

            var policies = helpers.addSource(cache, source, ['run', 'servicesgetIamPolicy', region]);

            if (!policies) return rcb();

            if (policies.err || !policies.data) {
                helpers.addResult(results, 3,
                    'Unable to query Cloud Run service policies: ' + helpers.addError(policies), region, null, null, policies.err);
                return rcb();
            }

            services.data.forEach(service => {
                if (!service.metadata || !service.metadata.name) return;

                let policy = policies.data.find(p => p.parent && p.parent.name === service.metadata.name);
                let publicAccess = false;
                if (policy && policy.bindings && policy.bindings.length) {
                    policy.bindings.forEach(binding => {
                        if (binding.members && binding.members.length) {
                            binding.members.forEach(member => {
                                if (member === 'allUsers' || member === 'allAuthenticatedUsers') {
                                    publicAccess = true;
                                }
                            });
                        }
                    });
                }

                let nameParts = service.metadata.name.split('/');
                let serviceName = nameParts[nameParts.length - 1];
                let resource = helpers.createResourceName('services', serviceName, null, 'location', region);

                if (publicAccess) {
                    helpers.addResult(results, 2,
                        'Cloud Run service allows unauthenticated invocations', region, resource);
                } else {
                    helpers.addResult(results, 0,
                        'Cloud Run service requires authentication', region, resource);
                }
            });

            rcb();
        }, function() {
            callback(null, results, source);
        });
    }
};
