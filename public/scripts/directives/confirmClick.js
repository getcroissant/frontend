/**
 * Ability to force a dialog on a clicked element.
 *
 * example: <button confirm-click="Are you sure you want to logout?"></button>
 *
 * @returns {{priority: number, terminal: boolean, link: Function}}
 */
module.exports = function() {
  return {
    priority: 1,
    terminal: true,
    link: function(scope, element, attr) {
      var msg = attr.confirmClick || "Are you sure?";
      var clickAction = attr.ngClick;
      element.bind('click', function(event) {
        if(window.confirm(msg)) {
          scope.$eval(clickAction)
        }
      });
    }
  };
};