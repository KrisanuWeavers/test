'use strict';

describe('module: main, controller: Venue-articlesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Venue-articlesCtrl;
  beforeEach(inject(function ($controller) {
    Venue-articlesCtrl = $controller('Venue-articlesCtrl');
  }));

  it('should do something', function () {
    expect(!!Venue-articlesCtrl).toBe(true);
  });

});
