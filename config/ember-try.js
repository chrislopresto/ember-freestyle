'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0',
          },
        },
      },
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5',
          },
        },
      },
      {
        name: 'ember-lts-3.24',
        npm: {
          devDependencies: {
            'ember-source': '~3.24.3',
          },
        },
      },
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          dependencies: {
            'ember-auto-import': '^2.0.0',
          },
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            webpack: '^5.0.0',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          dependencies: {
            'ember-auto-import': '^2.0.0',
          },
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            webpack: '^5.0.0',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          dependencies: {
            'ember-auto-import': '^2.0.0',
          },
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            webpack: '^5.0.0',
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
          },
          ember: {
            edition: 'classic',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
