"use strict";
(function() {
  angular
    .module("app.controllers.forecast", ["ngResource"])
    .controller("ForecastController", ForecastController);

  ForecastController.$inject = [
    "$scope",
    "CityService",
    "$resource",
    "WeatherConfigProvider",
    "toCelsiusFilter",
    "toFahrenheitFilter",
    "$routeParams"
  ];

  function ForecastController(
    $scope,
    CityService,
    $resource,
    WeatherConfigProvider,
    toCelsiusFilter,
    toFahrenheitFilter,
    $routeParams
  ) {
    var vm = this;
    vm.celsius = true;
    vm.dateFormat = "MMM d, y HH:mm";
    vm.cityName = CityService.getCityName();
    vm.count = $routeParams.count || 2;
    vm.weatherAPI = $resource(
      "http://api.openweathermap.org/data/2.5/forecast",
      {
        callback: "JSON_CALLBACK"
      },
      {
        get: { method: "JSONP" }
      }
    );

    vm.weatherResult = vm.weatherAPI.get({
      q: vm.cityName,
      cnt: vm.count,
      appid: WeatherConfigProvider.getAppId()
    });

    vm.toggleTemperatureUnit = function() {
      vm.celsius = !vm.celsius;
    };
  }
})();
