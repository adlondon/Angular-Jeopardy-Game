
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
          console.log("SCOPE", $scope);
          console.log("ANSWER", answer);
          window.glob = $scope
          if (input === answer) {
            $rootScope.score += value
          } else {
            $rootScope.score -= value
          }
        }
      }
    }
  })
