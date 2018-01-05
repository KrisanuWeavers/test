'use strict';

describe('module: main, controller: Article-detailsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Article-detailsCtrl;
  beforeEach(inject(function ($controller) {
    Article-detailsCtrl = $controller('Article-detailsCtrl');
  }));

  it('should do something', function () {
    expect(!!Article-detailsCtrl).toBe(true);
  });

});
