global.jQuery = require('jquery');
global.bootstrap = require('bootstrap');
global.slickCarousel = require('slick-carousel');

var angular = require('angular');
var angularRoute = require('angular-route');
var angularCookies = require('angular-cookies');

var moment = require('moment');
var _ = require('underscore');

var app = angular.module('website', [angularRoute, angularCookies]);

//Directives
app.directive('confirmClick', require('./directives/confirmClick'));

//Factories
app.factory('Authentication', require('./factories/authentication'));
app.factory('Product', require('./factories/product'));
app.factory('Kit', require('./factories/kit'));

//Controller
app.controller('HeaderController', require('./controllers/headerController'));
app.controller('FooterController', require('./controllers/footerController'));
app.controller('LoginController', require('./controllers/loginController'));
app.controller('SplashController', require('./controllers/splashController'));
app.controller('ProductController', require('./controllers/productController'));
app.controller('KitController', require('./controllers/kitController'));

//Configurations
app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: 'views/splash.html'
  }).when('/login', {
    templateUrl: 'views/login.html'
  }).when('/privacy', {
    templateUrl: 'views/privacy.html'
  }).when('/tos', {
    templateUrl: 'views/tos.html'
  }).when('/:id', {
    templateUrl: 'views/email.html'
  }).otherwise({
    templateUrl: 'views/404.html'
  });

});