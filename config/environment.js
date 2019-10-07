"use strict";

module.exports = function(environment /*, appConfig */) {
  let ENV = {};

  if (environment === "production") {
    ENV.rootURL = "/ember-freestyle";
    ENV.locationType = "hash";
  }

  return ENV;
};
