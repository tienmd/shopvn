/// <reference path="/Assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('projectshop.product_Categories', ['projectshop.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('product_categories', {
            url: '/product_categories',
            templateUrl: '/app/components/product_Categories/productCategoryListView.html',
            controller: 'productCategoryListController'
        })
            .state('add_product_category', {
            url: '/add_product_category',
            templateUrl: '/app/components/product_Categories/productCategoryAddView.html',
            controller: 'productCategoryAddController'
        })
            .state('edit_product_category', {
            url: '/edit_product_category/:id',
            templateUrl: '/app/components/product_Categories/productCategoryEditView.html',
            controller: 'productCategoryEditController'
        })
    }
})();