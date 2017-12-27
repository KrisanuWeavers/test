'use strict';

describe('module: main, controller: SignupComCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var SignupComCtrl;
  beforeEach(inject(function ($controller) {
    SignupComCtrl = $controller('SignupComCtrl');
  }));

  it('should do something', function () {
    expect(!!SignupComCtrl).toBe(true);
  });

});
