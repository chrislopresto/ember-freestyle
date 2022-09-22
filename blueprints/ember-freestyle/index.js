var path = require('path');

module.exports = {
  name: 'ember-freestyle',

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  normalizeEntityName: function () {},

  fileMapTokens: function () {
    return {
      __root__: function (options) {
        if (options.inAddon) {
          return path.join('tests', 'dummy');
        }

        return '/';
      },
    };
  },
};
