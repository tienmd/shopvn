/// <reference path="/Assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('projectshop.products', ['projectshop.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider,$urlRouterProvider) {
        $stateProvider.state('products', {
            url: '/products',
            templateUrl: '/app/components/products/productListView.html',
            controller:'homecontroller'
        })
    }
})