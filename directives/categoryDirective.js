
angular
  .module('jeopardy')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/gameBoardTemplate.html',
      restrict: 'EAC',
      scope: {
        title: '@',
        valueOne: '@',
        valueTwo: '@',
        valueThree: '@',
        valueFour: '@',
        valueFive: '@'
      },

//////LOOOK UP = SIGN INSTEAD OF @////////////\
    }
  })
