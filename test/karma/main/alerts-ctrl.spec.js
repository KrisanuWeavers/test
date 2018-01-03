'use strict';

describe('module: main, controller: AlertsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AlertsCtrl;
  beforeEach(inject(function ($controller) {
    AlertsCtrl = $controller('AlertsCtrl');
  }));

  it('should do something', function () {
    expect(!!AlertsCtrl).toBe(true);
  });

});
