/// <reference path="/Assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('projectshop', ['ui.router']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: "/admin",
            templateUrl: "app/components/homeView.html",
            controller:"homeController"
        })
    }
})
