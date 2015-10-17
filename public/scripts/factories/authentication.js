module.exports = function($http) {
  return {

    login: function(email, password) {
      return $http.post('/api/auth/login', {email: email, password: password});
    },

    logout: function() {
      return $http.post('/api/auth/logout', {});
    },

    getUserInfo: function() {
      return $http.get('/api/auth/userinfo');
    }
  }

};