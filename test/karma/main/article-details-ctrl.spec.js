'use strict';

describe('module: main, controller: ArticleDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ArticleDetailsCtrl;
  beforeEach(inject(function ($controller) {
    ArticleDetailsCtrl = $controller('ArticleDetailsCtrl');
  }));

  it('should do something', function () {
    expect(!!ArticleDetailsCtrl).toBe(true);
  });

});
