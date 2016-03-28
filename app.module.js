var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardy',['ngRoute','gameboard'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/',{
       templateUrl: "main.html",
     })
     .when('/404',{
       template: '<h1> 404 Page Not Found </h1>',
      //  controller: 'CategoryController'
     })
     .otherwise({
        redirectTo: '/404'
     })
 })

require('./gameboard');
