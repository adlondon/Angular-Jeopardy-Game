angular
  .module('jeopardy')
  .controller('CategoryController', function($scope,$location,CategoryService) {
    console.log("AM I HERE");
    CategoryService.getCategories()
    .then(function(data) {
      console.log(data);
      return  $scope.categories = data
    })
})
