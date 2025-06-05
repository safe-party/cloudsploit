var expect = require('chai').expect;
var plugin = require('./bucketPublicAccessPrevention');

const createCache = (err, data) => {
    return {
        buckets: {
            list: {
                'global': {
                    err: err,
                    data: data
                }
            }
        }
    }
};

describe('bucketPublicAccessPrevention', function () {
    describe('run', function () {
        it('should give unknown result if a bucket error is passed or no data is present', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(3);
                expect(results[0].message).to.include('Unable to query storage buckets');
                expect(results[0].region).to.equal('global');
                done()
            };
            const cache = createCache(
                ['error'],
                null,
            );
            plugin.run(cache, {}, callback);
        });
        it('should give passing result if no storage buckets found', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(0);
                expect(results[0].message).to.include('No storage buckets found');
                expect(results[0].region).to.equal('global');
                done()
            };
            const cache = createCache(
                null,
                [],
            );
            plugin.run(cache, {}, callback);
        });
        it('should give passing result if public access prevention is enforced', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(0);
                expect(results[0].message).to.include('Bucket public access prevention enforced');
                expect(results[0].region).to.equal('global');
                done()
            };
            const cache = createCache(
                null,
                [
                    {
                        id: "pape-bucket",
                        name: "pape-bucket",
                        iamConfiguration: {
                          publicAccessPrevention: 'enforced'
                        }
                    }
                ],
            );
            plugin.run(cache, {}, callback);
        });
        it('should give failing result if public access prevention is not enforced', function (done) {
            const callback = (err, results) => {
                expect(results.length).to.be.above(0);
                expect(results[0].status).to.equal(2);
                expect(results[0].message).to.include('Bucket public access prevention not enforced');
                expect(results[0].region).to.equal('global');
                done()
            };
            const cache = createCache(
                null,
                [
                    {
                        id: "pape-bucket2",
                        name: "pape-bucket2",
                        iamConfiguration: {
                          publicAccessPrevention: 'unspecified'
                        }
                    }
                ],
            );
            plugin.run(cache, {}, callback);
        });
    })
});
