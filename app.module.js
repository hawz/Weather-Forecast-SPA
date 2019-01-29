"use strict";
(function() {
  angular.module("weatherApp", [
    "app.routes",
    "app.config.weather",
    "app.controllers.home",
    "app.controllers.forecast",
    "app.directives.forecastResult",
    "app.filters",
    "app.services.cityService",
    "app.factories.weather"
  ]);
})();
