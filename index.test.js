"use strict";

require("angular");
require("angular-mocks");
require("./index.js");

describe('angular-button-progress', function () {
  beforeEach(angular.mock.module('angular-button-progress'));

  var button,
    scope,
    dfd;
  beforeEach(inject(function ($compile, $rootScope, $q) {
    button = angular.element('<button ng-click="someAsyncAction()" button-progress="">Submit</button>');
    scope = $rootScope.$new();
    scope.someAsyncAction = sinon.stub();
    dfd = $q.defer();
    scope.someAsyncAction.returns(dfd.promise);
    $compile(button)(scope);
    $rootScope.$apply();
  }));

  describe('when someone clicks button', function () {
    beforeEach(function () {
      button.triggerHandler('click');
    });

    it('should change button label to inform user that action is in progress', function () {
      expect(button.hasClass('m-progress')).toBe(true);
    });

    it('should call ng-click callback', function () {
      expect(scope.someAsyncAction).toHaveBeenCalled();
    });

    describe('when callback finished its job', function () {
      it('should change back button label to default one', inject(function ($rootScope) {
        dfd.resolve();
        $rootScope.$apply();
        expect(button.hasClass('m-progress')).toBe(false);
      }));
    });

  });
});
