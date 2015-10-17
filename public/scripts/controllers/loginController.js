module.exports = function($scope, $http, $location, Authentication) {

  var redirect = $location.search().redirect;

  $scope.email = '';

  $scope.password = '';

  $scope.login = function() {
    Authentication.login($scope.email, $scope.password).success(function(token) {
      if(redirect) $location.path(redirect);
    });
  };

};