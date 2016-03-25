
angular
  .module('jeopardy')
  .directive('questionCol', function() {
    return {
      templateUrl: '../templates/questionTemplate.html',
      restrict: 'E',
      scope: {
        question: '@',
        questValue: '@',
        answer: '@',
        questId: '@',
        category_id: '@'
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
