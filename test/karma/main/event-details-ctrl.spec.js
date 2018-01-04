'use strict';

describe('module: main, controller: Event-detailsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Event-detailsCtrl;
  beforeEach(inject(function ($controller) {
    Event-detailsCtrl = $controller('Event-detailsCtrl');
  }));

  it('should do something', function () {
    expect(!!Event-detailsCtrl).toBe(true);
  });

});
