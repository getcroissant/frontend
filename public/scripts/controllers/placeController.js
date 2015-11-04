var PhotoSwipe = require('photoswipe');
var PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');

module.exports = function($scope, $http, $routeParams, Place) {

  var id = $routeParams.id;

  $scope.place = {
    name: 'Machu Picchu',
    unique: 'machu-picchu',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic views. Its exact former use remains a mystery.',
    requirements: [
      {
        name: "Water",
        icon: "water",
        description: "Please bring enough water for a 3 day hike"
      },
      {
        name: "Hiking shoes",
        icon: "hiking-shoes",
        description: "Hiking shoes are mandatory because this is going to be a tenuous hike"
      },
      {
        name: "Map",
        icon: "map",
        description: "Map is required"
      },
      {
        name: "Tent",
        icon: "tent",
        description: "Setting up a tent at night is required"
      }
    ],
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
    },
    images: [
      {
        name: 'Picture 1',
        filePath: '/static/images/default.png'
      },
      {
        name: 'Picture 2',
        filePath: '/static/images/default.png'
      }
    ]


  };

  console.log('Place loaded: ' + id);


  $scope.displayGallery = function(index) {
    var element = document.querySelectorAll('.pswp')[0];

    //Create a list of image items
    var items = [];

    //Generate a image item
    for(var i = 0; i < $scope.place.images.length; i++) {
      var image = $scope.place.images[i];
      items.push({src: image.filePath, w: 1024, h: 682});
    }

    //Options for photoswipe
    var options = {
      index: index ? index : 0,
      history: false,
      focus: false
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(element, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

};