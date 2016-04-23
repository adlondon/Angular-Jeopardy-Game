
angular
  .module('gameboard')
  .controller('CategoryController', CategoryController)
    CategoryController.$inject = ['$scope', '$rootScope', '$location', 'CategoryService']
    function CategoryController($scope, $rootScope, $location,CategoryService) {
    var vm = this
    $rootScope.score= 0
    CategoryService.getCategories()
    .then(function(data) {
      vm.categories = data
    });
}
