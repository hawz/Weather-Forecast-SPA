"use strict";
(function() {
  angular.module("weatherApp", [
    "app.routes",
    "app.providers.weatherConfig",
    "app.controllers.home",
    "app.controllers.forecast",
    "app.directives.forecastResult",
    "app.filters",
    "app.services.cityService"
  ]);
})();
