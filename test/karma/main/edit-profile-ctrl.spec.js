'use strict';

describe('module: main, controller: Edit-profileCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Edit-profileCtrl;
  beforeEach(inject(function ($controller) {
    Edit-profileCtrl = $controller('Edit-profileCtrl');
  }));

  it('should do something', function () {
    expect(!!Edit-profileCtrl).toBe(true);
  });

});
