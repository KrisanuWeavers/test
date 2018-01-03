'use strict';

describe('module: main, controller: ArticlesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ArticlesCtrl;
  beforeEach(inject(function ($controller) {
    ArticlesCtrl = $controller('ArticlesCtrl');
  }));

  it('should do something', function () {
    expect(!!ArticlesCtrl).toBe(true);
  });

});
