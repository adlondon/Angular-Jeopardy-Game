var _ = require('underscore')

angular
  .module('gameboard')
  .controller('CategoryController', function($scope, $rootScope, $location,CategoryService) {
    $rootScope.score= 0
    CategoryService.getCategories()
    .then(function(data) {
      $scope.categories = data
      $scope.categories.forEach(function (el) {
        if(el.data.clues_count > 5) {
          el.data.clues = _.first(_.shuffle(el.data.clues), 5)
        }
        for (var i =0; i < 5; i++) {
          el.data.clues[i].value = 200 * (i + 1)
        }
      })
    });

})
