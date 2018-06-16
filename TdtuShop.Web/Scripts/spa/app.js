/// <reference path="tdtuShopDirective.html" />
/// <reference path="../plugins/angular/angular.js" />
////Khai bao module
//var myApp = angular.module('myModule', []);
////Add controller vao module
//myApp.controller("schoolController", schoolController);
//myApp.controller("studentController", studentController);
//myApp.controller("teacherController", teacherController);

////myController.$inject = ['$scope'];
////khai bao controller
//function schoolController($scope) {
//    $scope.message = "This is Annoucement from School";
//}

//function studentController($scope) {
//    $scope.message = "This is my message from Student";
//}

//function teacherController($scope) {
//    $scope.message = "This is my message from Teacher";
//}

var myApp = angular.module('myModule', []);

myApp.controller("schoolController", schoolController);

myApp.service('validatorService', validatorService);

myApp.directive("tdtuShopDirective", tdtuShopDirective);



schoolController.$inject = ['$scope', 'validatorService'];

function schoolController($scope, validatorService) {
    //$scope.message = Validator.checkNumber(2);
    $scope.checkNumber = function () {
        $scope.message = validatorService.checkNumber($scope.num);
    }
    $scope.num = 1;
}

function validatorService($window) {
    return {
        checkNumber: checkNumber
    }
    function checkNumber(input) {
        if (input % 2 == 0) {
            return ('This is even');
        }
        else
            return ('This is odd');
    }
}

function tdtuShopDirective() {
    return {
        restrict: "A",
        templateUrl: "/Scripts/spa/tdtuShopDirective.html"
    }
}