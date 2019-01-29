"use strict";
(function() {
  angular
    .module("app.controllers.home", [])
    .controller("HomeController", HomeController);

  HomeController.$inject = ["CityService", "$scope", "$location"];

  function HomeController(CityService, $scope, $location) {
    var vm = this;
    vm.cityName = '';

    activate();

    function activate() {
      vm.cityName = CityService.getCityName();
    }

    $scope.$watch("home.cityName", function() {
      CityService.setCityName(vm.cityName);
    });

    vm.searchCity = function() {
      $location.path('/forecast');
    }
  }
})();
