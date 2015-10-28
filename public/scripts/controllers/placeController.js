module.exports = function($scope, $http, $routeParams, Place) {

  var id = $routeParams.id;

  $scope.place = {
    name: 'Machu Picchu',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic views. Its exact former use remains a mystery.',
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

  console.log('Place loaded: ' + id);

};