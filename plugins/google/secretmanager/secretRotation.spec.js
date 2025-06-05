var expect = require('chai').expect;
var plugin = require('./secretRotation');

const secrets = [
    {
        name: 'projects/testproj/secrets/secret1',
        createTime: new Date().toISOString(),
        rotation: { rotationPeriod: '604800s' }
    },
    {
        name: 'projects/testproj/secrets/secret2',
        createTime: '2021-01-01T00:00:00Z',
        rotation: { rotationPeriod: '604800s' }
    },
    {
        name: 'projects/testproj/secrets/secret3',
        createTime: new Date().toISOString()
    },
    {
        name: 'projects/testproj/secrets/secret4',
        createTime: new Date().toISOString(),
        expireTime: '2099-01-01T00:00:00Z'
    }
];

const createCache = (list, err) => {
    return {
        secrets: {
            list: {
                'global': {
                    data: list,
                    err: err
                }
            }
        },
        projects: {
            get: {
                'global': {
                    data: [ { name: 'testproj' } ]
                }
            }
        }
    };
};

describe('secretRotation', function() {
    describe('run', function() {
        it('should give UNKNOWN if unable to query secrets', function(done) {
            const cache = createCache([], { message: 'error' });
            plugin.run(cache, {}, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(3);
                done();
            });
        });

        it('should pass if no secrets found', function(done) {
            const cache = createCache([], null);
            plugin.run(cache, {}, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(0);
                done();
            });
        });

        it('should warn if secret lacks rotation or expiration', function(done) {
            const cache = createCache([secrets[2]], null);
            plugin.run(cache, { secret_rotation_interval: 30 }, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(1);
                expect(results[0].message).to.include('no rotation');
                done();
            });
        });

        it('should warn if secret is older than threshold', function(done) {
            const cache = createCache([secrets[1]], null);
            plugin.run(cache, { secret_rotation_interval: 30 }, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(1);
                expect(results[0].message).to.include('days old');
                done();
            });
        });

        it('should pass if secret has rotation or expiration and not old', function(done) {
            const cache = createCache([secrets[0], secrets[3]], null);
            plugin.run(cache, { secret_rotation_interval: 30 }, (err, results) => {
                expect(results.length).to.equal(2);
                expect(results[0].status).to.equal(0);
                expect(results[1].status).to.equal(0);
                done();
            });
        });
    });
});
