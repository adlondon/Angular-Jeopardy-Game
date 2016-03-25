angular
  .module('jeopardy')
  .controller('CategoryController', function($scope,$location,CategoryService) {
    CategoryService.getCategories()
    .then(function(data) {
    return  $scope.categories = data
      })
})
