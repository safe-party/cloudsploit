var expect = require('chai').expect;
var plugin = require('./cloudRunPublicAccess');

const createCache = (policyErr, policies, serviceErr, services) => {
    return {
        run: {
            services: {
                'us-central1': {
                    err: serviceErr,
                    data: services
                }
            },
            servicesgetIamPolicy: {
                'us-central1': {
                    err: policyErr,
                    data: policies
                }
            }
        }
    };
};

const services = [
    {
        metadata: {
            name: 'projects/test-proj/locations/us-central1/services/service-1'
        }
    },
    {
        metadata: {
            name: 'projects/test-proj/locations/us-central1/services/service-2'
        }
    }
];

const policies = [
    {
        parent: { name: 'projects/test-proj/locations/us-central1/services/service-1' },
        bindings: [ { role: 'roles/run.invoker', members: ['allUsers'] } ]
    },
    {
        parent: { name: 'projects/test-proj/locations/us-central1/services/service-2' },
        bindings: [ { role: 'roles/run.invoker', members: ['user:test@example.com'] } ]
    }
];

describe('cloudRunPublicAccess', function () {
    describe('run', function () {
        it('should give unknown result if unable to query Cloud Run services', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(3);
                expect(results[0].message).to.include('Unable to query Cloud Run services');
                expect(results[0].region).to.equal('us-central1');
                done();
            };

            const cache = createCache(null, [], {message: 'error'}, []);

            plugin.run(cache, {}, callback);
        });

        it('should give passing result if no services are found', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(0);
                expect(results[0].message).to.include('No Cloud Run services found');
                expect(results[0].region).to.equal('us-central1');
                done();
            };

            const cache = createCache(null, [], null, []);

            plugin.run(cache, {}, callback);
        });

        it('should give failing result if service allows unauthenticated access', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(2);
                expect(results[0].message).to.include('Cloud Run service allows unauthenticated invocations');
                expect(results[0].region).to.equal('us-central1');
                done();
            };

            const cache = createCache(null, [policies[0]], null, [services[0]]);

            plugin.run(cache, {}, callback);
        });

        it('should give passing result if service requires authentication', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(0);
                expect(results[0].message).to.include('Cloud Run service requires authentication');
                expect(results[0].region).to.equal('us-central1');
                done();
            };

            const cache = createCache(null, [policies[1]], null, [services[1]]);

            plugin.run(cache, {}, callback);
        });
    });
});
