'use strict';

describe('module: main, controller: VenueArticlesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var VenueArticlesCtrl;
  beforeEach(inject(function ($controller) {
    VenueArticlesCtrl = $controller('VenueArticlesCtrl');
  }));

  it('should do something', function () {
    expect(!!VenueArticlesCtrl).toBe(true);
  });

});
