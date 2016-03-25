
angular
  .module('jeopardy')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/gameBoardTemplate.html',
      restrict: 'E',
      scope: {
        title: '@'
        // id: '@'
      },



      // link: function(scope,element,attributes) {
      //   console.log("el", element)
      //   element.bind('mouseover', function(event) {
      //     if(attributes.weatherHuman === "henry") {
      //       this.style.color = 'red';
      //     }
      //   })
      // }
    }
  })
