'use strict';

describe('module: main, controller: VenueInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var VenueInfoCtrl;
  beforeEach(inject(function ($controller) {
    VenueInfoCtrl = $controller('VenueInfoCtrl');
  }));

  it('should do something', function () {
    expect(!!VenueInfoCtrl).toBe(true);
  });

});
