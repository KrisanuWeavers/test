'use strict';

describe('module: main, controller: Venue-infoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Venue-infoCtrl;
  beforeEach(inject(function ($controller) {
    Venue-infoCtrl = $controller('Venue-infoCtrl');
  }));

  it('should do something', function () {
    expect(!!Venue-infoCtrl).toBe(true);
  });

});
