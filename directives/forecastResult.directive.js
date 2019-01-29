'use strict';
(function() {
  angular.module('app.directives.forecastResult', [])
    .directive('forecastResult', forecastResult);
    function forecastResult() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: './directives/forecastResult.template.html',
        scope: {
          weatherRes: '=',
          celsius: '=',
          toggleTemperatureUnit: '&',
          dateFormat: '@'
        }
      };
    }
})();