(function () {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('CategoriesController', CategoriesController);

  /** @ngInject */
  function CategoriesController ($resource,$stateParams) {
    var article = this;
    console.log('param', $stateParams);
    article.toto = $stateParams.cate;
    var articlesData =
      $resource ('../../static/articles.json')
      .query ()
      .$promise
      .then(function(result){
        console.log(result);
        return result;
      });

    // var articlesDisplay =
    //   articlesData.map(function(item){
    //     if(item.category == $stateParams.cate){
    //       return item;
    //     }
    //   },[]);

      console.log(articlesData);



  }
})();
