'use strict';

describe('module: main, controller: Forgot-passwordCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Forgot-passwordCtrl;
  beforeEach(inject(function ($controller) {
    Forgot-passwordCtrl = $controller('Forgot-passwordCtrl');
  }));

  it('should do something', function () {
    expect(!!Forgot-passwordCtrl).toBe(true);
  });

});
