angular
  .module('jeopardy')
  .controller('CategoryController', function($scope, $rootScope, $location,CategoryService) {
    $rootScope.score= 0
    CategoryService.getCategories()
    .then(function(data) {
      $scope.categories = data
    });

})
