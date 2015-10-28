//Global elements the needs to be loaded once
global.jQuery = require('jquery');
global.bootstrap = require('bootstrap');
global.slickCarousel = require('slick-carousel');

//Angular dependencies
var angular = require('angular');
var angularRoute = require('angular-route');
var angularCookies = require('angular-cookies');

//Utilities
var moment = require('moment');
var _ = require('underscore');

var app = angular.module('website', [angularRoute, angularCookies]);

//Directives
app.directive('confirmClick', require('./directives/confirmClick'));

//Filters
app.filter('humanize', require('./filters/humanize'));

//Factories
app.factory('Authentication', require('./factories/authentication'));
app.factory('Place', require('./factories/place'));

//Controller
app.controller('HeaderController', require('./controllers/headerController'));
app.controller('FooterController', require('./controllers/footerController'));
app.controller('LoginController', require('./controllers/loginController'));
app.controller('SplashController', require('./controllers/splashController'));
app.controller('PlaceController', require('./controllers/placeController'));

//Configurations
app.config(function($locationProvider, $routeProvider) {

  //Hashbang for Google SEO
  $locationProvider.html5Mode(true).hashPrefix('!');

  //Routes
  $routeProvider.when('/', {
    templateUrl: 'views/splash.html'
  }).when('/login', {
    templateUrl: 'views/login.html'
  }).when('/privacy', {
    templateUrl: 'views/privacy.html'
  }).when('/tos', {
    templateUrl: 'views/tos.html'
  }).when('/about', {
    templateUrl: 'views/about.html'
  }).when('/place/:id', {
    templateUrl: 'views/place.html'
  }).otherwise({
    templateUrl: 'views/404.html'
  });

});