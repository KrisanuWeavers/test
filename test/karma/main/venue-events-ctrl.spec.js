'use strict';

describe('module: main, controller: Venue-eventsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Venue-eventsCtrl;
  beforeEach(inject(function ($controller) {
    Venue-eventsCtrl = $controller('Venue-eventsCtrl');
  }));

  it('should do something', function () {
    expect(!!Venue-eventsCtrl).toBe(true);
  });

});
