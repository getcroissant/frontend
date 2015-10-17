$ = require('jquery');

module.exports = function($scope, $http, $location, Product) {

  $scope.search = '';

  $scope.find = function() {
    console.log('Finding ' + $scope.search);

    $location.path('/' + $scope.search)
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
      centerMode: true
    });
  });

};