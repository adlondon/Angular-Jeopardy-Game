
angular
  .module('jeopardy')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/gameBoardTemplate.html',
      restrict: 'EA',
      scope: {
        title: '@',
        valueOne: '@',
        valueTwo: '@',
        valueThree: '@',
        valueFour: '@',
        valueFive: '@',
        idOne: '@',
        idTwo: '@',
        idThree: '@',
        idFour: '@',
        idFive: '@',
        questOne: '@',
        questTwo: '@',
        questThree: '@',
        questFour: '@',
        questFive: '@',
        answerFive: '@',
        answerOne: '@',
        answerTwo: '@',
        answerThree: '@',
        answerFour: '@',
        answerFive: '@',
        addScore: "&"
      },
      controller: function ($rootScope,$scope) {
        console.log("I SHOULD HAVE 6")
        $scope.addScore = function(val) {
          console.log('I CLICKED A BUTTN', val);
        }
      },
      link: function (scope, element ) {
          //  window.elm = element;

      }

//////LOOOK UP = SIGN INSTEAD OF @////////////\
    }
  })
