var path = require('path');

module.exports = {
  name: 'ember-freestyle',

  normalizeEntityName: function() {},

  afterInstall: function() {
    var bowerPackages = [
      { name: 'remarkable', target: '1.6.2' },
      { name: 'highlightjs', target: '9.1.0' }
    ];

    return this.addBowerPackagesToProject(bowerPackages);
  }
};
