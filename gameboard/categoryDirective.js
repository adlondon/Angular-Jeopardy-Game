
angular
  .module('gameboard')
  .directive('titleBar', titleBar);
    function titleBar() {
    return {
      templateUrl: 'gameboard/templates/gameBoardTemplate.html',
      restrict: 'EA',
      scope: {
        question: '=',
      },
      controller: BoardCtrl
    };
  }

  BoardCtrl.$inject = ['$rootScope','$scope'];
  function BoardCtrl ($rootScope,$scope) {
    $scope.addScore = function(input, answer, value) {
      console.log(input, answer);
      var parsedInput = input.toLowerCase().trim(); 
      var parsedAnswer = answer.toLowerCase().replace(/<(?:.|\n)*?>/gm, '').replace(/\\/g, '');
      console.log(parsedInput, parsedAnswer);
      if (parsedAnswer.includes(parsedInput)) {
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
