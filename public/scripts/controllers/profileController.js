module.exports = function($scope, $http, $routeParams, Profile) {

  $scope.profile = {
    name: 'John Smith',
    bio: 'Walked the 7 kingdoms on foot'
  };

  console.log('Profile loaded')

};