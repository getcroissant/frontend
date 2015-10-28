var moment = require('moment');

/**
 * Takes an millisecond time input and converts it into words.
 * @see http://momentjs.com/docs/#/durations/humanize/
 * @returns {Function}
 */
module.exports = function() {
  return function(input) {
    return moment.duration(input).humanize();
  }
};