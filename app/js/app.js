var bandApp = angular.module('bandApp', ['ngRoute']);

// Routing
bandApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/band", {
        templateUrl : "views/band.html"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    })
    .when("/music", {
        templateUrl : "views/music.html"
    })
    .when("/gigs", {
        templateUrl : "views/gigs.html"
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});