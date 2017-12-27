'use strict';

describe('module: main, controller: SigninCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var SigninCtrl;
  beforeEach(inject(function ($controller) {
    SigninCtrl = $controller('SigninCtrl');
  }));

  it('should do something', function () {
    expect(!!SigninCtrl).toBe(true);
  });

});
