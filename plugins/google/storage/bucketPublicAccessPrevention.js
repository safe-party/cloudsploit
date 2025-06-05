var async = require('async');
var helpers = require('../../../helpers/google');

module.exports = {
    title: 'Bucket Public Access Prevention',
    category: 'Storage',
    domain: 'Storage',
    severity: 'Medium',
    description: 'Ensures public access prevention is enforced on storage buckets.',
    more_info: 'Public access prevention blocks all public access to buckets and objects to avoid accidental exposure.',
    link: 'https://cloud.google.com/storage/docs/public-access-prevention',
    recommended_action: 'Ensure that public access prevention is enforced on storage buckets.',
    apis: ['buckets:list'],
    realtime_triggers: ['storage.buckets.update', 'storage.buckets.create', 'storage.buckets.delete'],

    run: function(cache, settings, callback) {
        var results = [];
        var source = {};
        var regions = helpers.regions();

        async.each(regions.buckets, function(region, rcb){
            let buckets = helpers.addSource(
                cache, source, ['buckets', 'list', region]);

            if (!buckets) return rcb();

            if (buckets.err || !buckets.data) {
                helpers.addResult(results, 3, 'Unable to query storage buckets: ' + helpers.addError(buckets), region);
                return rcb();
            }

            if (!buckets.data.length) {
                helpers.addResult(results, 0, 'No storage buckets found', region);
                return rcb();
            }

            var bucketFound = false;
            buckets.data.forEach(bucket => {
                if (bucket.name) {
                    let resource = helpers.createResourceName('b', bucket.name);
                    bucketFound = true;
                    if (bucket.iamConfiguration && bucket.iamConfiguration.publicAccessPrevention === 'enforced') {
                        helpers.addResult(results, 0, 'Bucket public access prevention enforced', region, resource);
                    } else {
                        helpers.addResult(results, 2, 'Bucket public access prevention not enforced', region, resource);
                    }
                }
            });

            if (!bucketFound) {
                helpers.addResult(results, 0, 'No storage buckets found', region);
            }

            rcb();
        }, function(){
            callback(null, results, source);
        });
    }
};
