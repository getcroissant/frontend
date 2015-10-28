var moment = require('moment');

module.exports = function() {
  return function(input) {
    return moment.duration(input).humanize();
  }
};