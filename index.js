(function () {
  "use strict";

  var moduleName = 'angular-button-progress';

  angular
    .module(moduleName, [])
    .directive('buttonProgress', buttonProgress);

  if (typeof require !== 'undefined') {
    require("./index.less");
  }

  function buttonProgress($parse) {
    var clickFn;

    return {
      restrict: 'A',
      compile: function ($element, attrs) {
        clickFn = $parse(attrs.ngClick);
        attrs.$set('ngClick', angular.noop);
        return link;
      }
    };

    function link(scope, element) {
      element.on('click', function (event) {

        element.addClass('m-progress');
        var result = clickFn(scope, {$event: event});

        if (result && result.finally) {
          result.finally(function () {
            element.removeClass('m-progress');
          });
        } else {
          element.removeClass('m-progress');
        }

        scope.$apply();
      });
    }
  }

  if (typeof module !== 'undefined') {
    module.exports = moduleName;
  }

}());
