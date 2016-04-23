var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('gameboard',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/gameboard',{
       templateUrl: "gameboard/templates/grid.html",
       controller: "CategoryController as CategoryCtrl"
     })
 })
