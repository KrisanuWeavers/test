'use strict';

describe('module: main, controller: Change-passwordCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Change-passwordCtrl;
  beforeEach(inject(function ($controller) {
    Change-passwordCtrl = $controller('Change-passwordCtrl');
  }));

  it('should do something', function () {
    expect(!!Change-passwordCtrl).toBe(true);
  });

});
