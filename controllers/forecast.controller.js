"use strict";
(function() {
  angular
    .module("app.controllers.forecast", ["ngResource"])
    .controller("ForecastController", ForecastController);

  ForecastController.$inject = [
    "$routeParams",
    "CityService",
    "WeatherConfigProvider",
    "toCelsiusFilter",
    "toFahrenheitFilter",
    "WeatherFactory"
  ];

  function ForecastController(
    $routeParams,
    CityService,
    WeatherConfigProvider,
    toCelsiusFilter,
    toFahrenheitFilter,
    WeatherFactory
  ) {
    var vm = this;
    activate();

    function activate() {
      vm.celsius = true;
      vm.dateFormat = "MMM d, y HH:mm";
      vm.cityName = CityService.getCityName();
      vm.count = $routeParams.count || 2;
      getWeatherData();
    }

    function getWeatherData() {
      WeatherFactory.get({
        q: vm.cityName,
        cnt: vm.count,
        appid: WeatherConfigProvider.getAppId()
      }).$promise
      .then(
        (res) => vm.weatherResult = res
      )
      .catch(
        (error) => console.error(error)
      );
    }

    vm.toggleTemperatureUnit = function() {
      vm.celsius = !vm.celsius;
    };
  }
})();
