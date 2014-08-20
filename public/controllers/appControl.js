/**
 * Created by matthias on 6/16/14.
 */

angular.module('appControl', [])

    .controller('IndexController', function($scope) {
        $scope.debuginfo = 'Index Controller';
        $scope.firstname ='Matthias';
        $scope.lastname ='Gattermeier';
        $scope.web = 'http://www.gattermeier.net';
       // var db      = require('./config/db');
        //$scope.db = db.url;
    })

    .controller('loginCtrl', function($scope) {
        $scope.debuginfo = "Login";})

    .controller('registerCtrl', function($scope) {
        $scope.debuginfo = "Register";})

    .controller('profileCtrl', function($scope) {
        $scope.debuginfo = "Profile";})

;
