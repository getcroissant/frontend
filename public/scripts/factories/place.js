module.exports = function($http) {
  return {

    createKit: function(name, description, products) {
      return $http.post('/api/kit', {name: name, description: description, products: products});
    },

    getById: function(id) {
      return $http.get('/api/kit/' + id);
    },

    getKits: function() {
      return $http.get('/api/kit');
    }

  }
};