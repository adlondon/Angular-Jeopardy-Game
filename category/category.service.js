angular
  .module('jeopardy')
  .service('CategoryService',function($http, $q, $cacheFactory) {

    var urlOne = 'http://jservice.io/api/category?id=11531';
    var urlTwo = 'http://jservice.io/api/category?id=11559';
    var urlThree = 'http://jservice.io/api/category?id=11574';
    var urlFour = 'http://jservice.io/api/category?id=11587';
    var urlFive = 'http://jservice.io/api/category?id=11580';
    var urlSix = 'http://jservice.io/api/category?id=11599';
    var coors = "https://free-cors-server.herokuapp.com/any-request/"

    var categoryArr = [urlOne, urlTwo, urlThree, urlFour, urlFive, urlSix]

    function getCategories() {
      console.log("SHOW ME")
      var promises = [];
      categoryArr.forEach(function(el) {
        var promise = $http.get(coors + encodeURIComponent(el))
        promises.push(promise)
        })
      return $q.all(promises)
    };

    return {
      getCategories: getCategories
    }
})
