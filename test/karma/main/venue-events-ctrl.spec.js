'use strict';

describe('module: main, controller: VenueEventsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var VenueEventsCtrl;
  beforeEach(inject(function ($controller) {
    VenueEventsCtrl = $controller('VenueEventsCtrl');
  }));

  it('should do something', function () {
    expect(!!VenueEventsCtrl).toBe(true);
  });

});
