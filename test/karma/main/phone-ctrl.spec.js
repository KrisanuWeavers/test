'use strict';

describe('module: main, controller: PhoneCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var PhoneCtrl;
  beforeEach(inject(function ($controller) {
    PhoneCtrl = $controller('PhoneCtrl');
  }));

  it('should do something', function () {
    expect(!!PhoneCtrl).toBe(true);
  });

});
