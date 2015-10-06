var angular = require('angular');

var app = angular.module('gods', []);

//Directives
app.directive('confirmClick', require('./directives/confirmClick'));

//Factories
app.factory('Authentication', require('./factories/authentication'));

//Controller
app.controller('HeaderController', require('./controllers/headerController'));
app.controller('FooterController', require('./controllers/footerController'));
