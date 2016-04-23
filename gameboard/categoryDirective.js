
angular
  .module('gameboard')
  .directive('titleBar', titleBar);
    function titleBar() {
    return {
      templateUrl: 'gameboard/templates/gameBoardTemplate.html',
      restrict: 'EA',
      scope: {
        question: '=',
        // addScore: "&"
      },
      controller: BoardCtrl
    };
  }

  BoardCtrl.$inject = ['$rootScope','$scope'];
  function BoardCtrl ($rootScope,$scope) {
    $scope.addScore = function(input, answer, value) {
      // https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
      if (input === $(answer).toLowerCase()) {
        $rootScope.score += value;
      } else {
        $rootScope.score -= value
      }
    };
    $scope.hideModal = function (id) {
      $('button.' + id).toggle()
      $('#' + id).modal('hide')
    };
    $scope.hideValue = function (id) {
      $('button.' + id).prop("disabled", true)
      $('div.' + id).toggle()
    };
  }
