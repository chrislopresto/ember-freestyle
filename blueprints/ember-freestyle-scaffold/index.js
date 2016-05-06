/*jshint node:true*/
var path               = require('path');
var fs                 = require('fs-extra');
var chalk              = require('chalk');
var addFreestyleRoutes = require('../../lib/utilities/freestyle-routes-generator').addFreestyleRoutes;

module.exports = {
  description: 'Scaffold Freestyle',

  fileMapTokens: function() {
    return {
      __templateName__: function(options){
        if (options.pod) {
          return "template";
        }
        return options.dasherizedModuleName;
      },
      __templatePath__: function(options) {
        if (options.pod) {
          return path.join(options.podPath,  options.dasherizedModuleName);
        }
        return 'templates';
      },
      __controllerName__: function(options){
        if (options.pod) {
          return "controller";
        }
        return options.dasherizedModuleName;
      },
      __controllerPath__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, options.dasherizedModuleName);
        }
        return 'controllers';
      },
      __root__: function(options) {
        if (options.inAddon) {
          return path.join('tests', 'dummy', 'app');
        }

        return 'app';
      }
    };
  },

  afterInstall: function(options) {
    this._addFreestyleRoute(options);
  },

  _addFreestyleRoute: function(options) {
    var baseFile = this._baseFilePath(options.target, options);
    var routerFile = path.join(baseFile, 'app', 'router.js');

    if (fs.existsSync(routerFile)) {
      var status = addFreestyleRoutes(routerFile, {
        routeName: options.entity.name || 'freestyle',
      });
      this._writeRouterStatus(status, 'green');
    }
  },

  _writeRouterStatus: function(status, operationColor) {
    var color = status === 'identical' ? 'yellow' : operationColor;
    this._writeStatusToUI(chalk[color], status, 'app/router.js');
  },

  _baseFilePath: function(root, options) {
    // TODO options.isAddon is undefined in afterInstall hook
    // This suppose to handle the router change in the dummy app if run in an addon dir
    if (options.inAddon) {
      return path.join(root, 'tests', 'dummy');
    }

    return root;
  },
};
