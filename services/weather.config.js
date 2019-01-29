'use strict';
(function() {
  angular.module('app.config.weather', [])
  .service('WeatherConfigProvider', WeatherConfigProvider);

  function WeatherConfigProvider() {
    var self = this;
    this.appId = "db97cf229c4ff3e3dc893924b2465041";

    this.getAppId = function() {
      return self.appId;
    };
  }
})();
