'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            '@glimmer/component': '^1.1.2',
            'ember-source': '~4.8.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            '@glimmer/component': '^1.1.2',
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.12',
        npm: {
          devDependencies: {
            '@glimmer/component': '^1.1.2',
            'ember-source': '~5.12.0',
          },
        },
      },
      {
        name: 'ember-6.12',
        npm: {
          devDependencies: {
            '@glimmer/component': '^1.1.2',
            'ember-source': '~6.12.0',
          },
        },
      },
      {
        name: 'ember-6.12-glimmer-v2',
        npm: {
          devDependencies: {
            '@glimmer/component': '^2.0.0',
            'ember-source': '~6.12.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta-failing',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
        allowedToFail: true,
      },
      {
        name: 'ember-canary-failing',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
        allowedToFail: true,
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
