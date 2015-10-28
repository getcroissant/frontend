module.exports = function($scope, $http, $routeParams, Place) {

  var id = $routeParams.id;

  $scope.place = {
    name: 'Machu Picchu',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic views. Its exact former use remains a mystery.',
    amenities: [
      {
        name: 'A carbon fiber walking stick',
        description: 'Climbing material that gives extra support for climbers'
      },
      {
        name: 'Three day lunch',
        description: 'Variety selection of food that will supply all your burned proteins'
      }
    ],
    duration: 500000000,
    price: {
      amount: 40,
      currency: '$'
    }

  };

  console.log('Place loaded: ' + id);

};