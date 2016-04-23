var _ = require('underscore')


angular
  .module('gameboard')
  .service('CategoryService',function($http, $q) {

    var base = "http://jservice.io/api/category?id="
    var categoryArr = []

    function getCategories() {

      var promises = [];
      for (var i = 0; i < 6; i ++) {
        promises.push($http.get(base + randomizer()))
      }

      return $q.all(promises).then(function(categories) {
        categories.forEach(function (el) {
          //////Brandon Hare helped with shuffle//////
          if(el.data.clues_count > 5) {
            el.data.clues = _.first(_.shuffle(el.data.clues), 5)
          }
          for (var i =0; i < 5; i++) {
            el.data.clues[i].value = 200 * (i + 1)
          }
        })
      return categories
      })
    }


    function randomizer() {
      return Math.ceil(Math.random() * 18418)
    }
    return {
      getCategories: getCategories
    }
})
