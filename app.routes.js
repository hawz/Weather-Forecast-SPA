"use strict";
(function() {
  angular.module("app.routes", ["ngRoute"])
  .config(config);

  config.$inject = ["$routeProvider"];

  function config($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./pages/home.html",
        controller: "HomeController",
        controllerAs: "home"
      })
      .when("/forecast", {
        templateUrl: "./pages/forecast.html",
        controller: "ForecastController",
        controllerAs: "forecast"
      })
      .when("/forecast/:count", {
        templateUrl: "./pages/forecast.html",
        controller: "ForecastController",
        controllerAs: "forecast"
      });
  }
})();
