
angular
  .module('gameboard')
  .directive('titleBar', function() {
    return {
      templateUrl: 'gameboard/templates/gameBoardTemplate.html',
      restrict: 'EA',
      scope: {
        question: '=',
        // addScore: "&"
      },
      controller: function ($rootScope,$scope) {
        $scope.addScore = function(input, answer, value) {
          if (input === answer) {
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
    };
  })
