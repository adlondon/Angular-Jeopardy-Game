
angular
  .module('jeopardy')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/gameBoardTemplate.html',
      restrict: 'EA',
      scope: {
        question: '=',
        clues: '=',
        addScore: "&"
      },
      controller: function ($rootScope,$scope) {
        $scope.addScore = function(val) {
          console.log("SCOPE", $scope);
          window.glob = $scope
          // console.log("THIS", $this);
          // console.log("answerOne", answerOne);
        }
      }
    }
  })
