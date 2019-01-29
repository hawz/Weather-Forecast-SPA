"use strict";
(function() {
  angular
    .module("app.services.cityService", [])
    .service("CityService", CityService);

  function CityService() {
    var self = this;

    this.cityName = "Sassari";

    this.getCityName = function() {
      return self.cityName;
    };

    this.setCityName = function(cityName) {
      self.cityName = cityName;
    };
  }
})();
