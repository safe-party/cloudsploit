var helpers = require('../../../helpers/google');

module.exports = {
    title: 'Secret Rotation',
    category: 'Secret Manager',
    domain: 'Identity and Access Management',
    severity: 'Medium',
    description: 'Ensure secrets have rotation schedules or expire in a timely manner.',
    more_info: 'Secrets without rotation or expiration may remain valid indefinitely and increase risk of compromise.',
    link: 'https://cloud.google.com/secret-manager/docs/secret-rotation',
    recommended_action: 'Configure rotation schedules or expiration for all secrets.',
    apis: ['secrets:list'],
    settings: {
        secret_rotation_interval: {
            name: 'Secret Rotation Interval',
            description: 'Number of days after which secret age should trigger a warning',
            regex: '^[1-9]{1}[0-9]{0,3}$',
            default: '90'
        }
    },

    run: function(cache, settings, callback) {
        var results = [];
        var source = {};
        var rotationInterval = parseInt(settings.secret_rotation_interval || this.settings.secret_rotation_interval.default);

        let projects = helpers.addSource(cache, source, ['projects', 'get', 'global']);

        if (!projects || projects.err || !projects.data || !projects.data.length) {
            helpers.addResult(results, 3,
                'Unable to query for projects: ' + helpers.addError(projects), 'global', null, null, projects ? projects.err : null);
            return callback(null, results, source);
        }

        var project = projects.data[0].name;

        let secrets = helpers.addSource(cache, source, ['secrets', 'list', 'global']);

        if (!secrets) return callback(null, results, source);

        if (secrets.err || !secrets.data) {
            helpers.addResult(results, 3, 'Unable to query secrets: ' + helpers.addError(secrets), 'global', null, null, secrets.err);
            return callback(null, results, source);
        }

        if (!secrets.data.length) {
            helpers.addResult(results, 0, 'No secrets found', 'global');
            return callback(null, results, source);
        }

        secrets.data.forEach(secret => {
            if (!secret.name) return; // skip if name missing
            let name = secret.name.split('/').pop();
            let resource = helpers.createResourceName('secrets', name, project, 'global');
            let issues = [];

            if (!secret.rotation && !secret.expireTime) {
                issues.push('no rotation or expiration configured');
            }

            if (secret.createTime) {
                let age = helpers.daysBetween(secret.createTime, new Date());
                if (age > rotationInterval) {
                    issues.push(`${age} days old`);
                }
            }

            if (issues.length) {
                helpers.addResult(results, 1, `Secret ${issues.join(' and ')}`, 'global', resource);
            } else {
                helpers.addResult(results, 0, 'Secret rotation configured', 'global', resource);
            }
        });

        callback(null, results, source);
    }
};
