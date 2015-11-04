module.exports = function($http) {
  return {

    getById: function(id) {
      return $http.get('/api/profile/' + id);
    },

    getProfiles: function() {
      return $http.get('/api/profile');
    }

  }
};