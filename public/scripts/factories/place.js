module.exports = function($http) {
  return {

    createPlace: function(name, description) {
      return $http.post('/api/place', {name: name, description: description});
    },

    getById: function(id) {
      return $http.get('/api/place/' + id);
    },

    getPlaces: function() {
      return $http.get('/api/place');
    }

  }
};