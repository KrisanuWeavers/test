'use strict';

describe('module: main, controller: EditProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var EditProfileCtrl;
  beforeEach(inject(function ($controller) {
    EditProfileCtrl = $controller('EditProfileCtrl');
  }));

  it('should do something', function () {
    expect(!!EditProfileCtrl).toBe(true);
  });
});
