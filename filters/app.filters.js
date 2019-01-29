"use strict";
(function() {
  // FILTERS
  angular.module('app.filters', [])
  .filter("toCelsius", toCelsius)
  .filter("toFahrenheit", toFahrenheit);

  function toCelsius() {
    return function(input) {
      return Math.round(input - 273.15);
    }
  }

  function toFahrenheit() {
    return function(input) {
      return Math.round(1.8 * (input - 273.15) + 32);
    }
  }
})();
