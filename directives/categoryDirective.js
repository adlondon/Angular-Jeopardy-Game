
angular
  .module('jeopardy')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/gameBoardTemplate.html',
      restrict: 'EA',
      scope: {
        question: '=',
        addScore: "&"
      },
      controller: function ($rootScope,$scope, $element) {
        $scope.addScore = function(input, answer, value) {
          if (input === answer) {
            $rootScope.score += value;
          } else {
            $rootScope.score -= value
          }
        }
        $scope.hideModal = function (id) {
          $('button.' + id).prop("disabled", true)
          $('button.' + id).toggle()
          $('#' + id).modal('hide')
        }
        $scope.hideValue = function (id) {
          $('div.' + id).toggle()
        }
      }
    }
  })
