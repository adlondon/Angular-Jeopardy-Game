var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardy',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/',{
       templateUrl: "templates/grid.html",
       controller: "CategoryController"
     })
     .when('/404',{
       template: '<h1> You messed up, loser </h1>',
       controller: 'CategoryController'
     })
     .otherwise({
        redirectTo: '/404'
     })
 })

require('./category/category.controller');
require('./category/category.service');
require('./question/question.service');
require('./question/question.controller');
// require('./services/cacheEngine.service');
require('./directives/categoryDirective');
require('./directives/questionDirective');
