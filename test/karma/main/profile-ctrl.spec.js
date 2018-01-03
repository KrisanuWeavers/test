'use strict';

describe('module: main, controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ProfileCtrl;
  beforeEach(inject(function ($controller) {
    ProfileCtrl = $controller('ProfileCtrl');
  }));

  it('should do something', function () {
    expect(!!ProfileCtrl).toBe(true);
  });

});
