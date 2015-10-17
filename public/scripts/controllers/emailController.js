module.exports = function($scope, $http, $routeParams, Email) {

  var id = $routeParams.id;

  $scope.kit = {
    name: 'Japanese ramen',
    description: 'A dish that is simple to eat but hard to learn.',
    products: [
      {
        name: 'Thin wheat noodles',
        description: 'Healthy noodles that feed a family of 4.',
        amount: 6.00
      },
      {
        name: 'Naruto',
        description: 'Fish cake with a circular design.',
        amount: 2.00
      }
    ]
  };

  console.log('Kit loaded: ' + id);

};