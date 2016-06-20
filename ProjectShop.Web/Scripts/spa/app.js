/// <reference path="../plugins/angular/angular.js" />


var myApp = angular
    .module('myModule', [])
    .controller("myController", function ($scope) {
        var employees = [
            { ten: "Thanh", tuoi: "19", lop: "12" },
            { ten: "Hoa", tuoi: "19", lop: "12" },
            { ten: "Lan", tuoi: "19", lop: "12" },
            { ten: "Hồng", tuoi: "19", lop: "12" },
            { ten: "Hạnh", tuoi: "19", lop: "12" }
        ];
        $scope.employees = employees;

    })



