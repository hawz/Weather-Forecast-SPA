"use strict";
(function() {
  angular
    .module("app.factories.weather", [])
    .factory("WeatherFactory", WeatherFactory);

  WeatherFactory.$inject = ["$resource"];

  function WeatherFactory($resource) {
    var weatherFactory = $resource(
      "http://api.openweathermap.org/data/2.5/forecast",
      {
        callback: "JSON_CALLBACK"
      },
      {
        get: { method: "JSONP" }
      }
    );

    return weatherFactory;
  }
})();
