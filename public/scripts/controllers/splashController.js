var $ = require('jquery');
var slick = require('slick-carousel');

module.exports = function($scope, $http, $location) {

  $scope.search = '';

  $scope.find = function() {
    console.log('Finding ' + $scope.search);
    $location.path('/place/' + $scope.search)
  };

  /**
   * Load any animations or any 3rd party javascript plugins
   */
  $(document).ready(function() {
    $('#carousel').slick({
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]

    });
  });

};