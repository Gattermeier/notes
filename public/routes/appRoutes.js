/**
 * Created by matthias on 6/16/14.
 */
angular.module('appRoutes', [])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: '../views/data.html',
            controller: 'dataCtrl'
        })
        .when('/notes', {
            templateUrl: '../views/notes.html',
            controller: 'notesCtrl'
        })
        .when('/data', {
            templateUrl: '../views/data.html',
            controller: 'dataCtrl'
        })
        .when('/login', {
            templateUrl: "../views/login.html",
            controller: 'loginCtrl'
        })
        .when('/register', {
            templateUrl: "../views/register.html",
            controller: 'registerCtrl'
        })
        .when('/profile', {
            templateUrl: "../views/profile.html",
            controller: 'profileCtrl'
        })
    ;

    $locationProvider.html5Mode(true);

}]);
