(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/app.component.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
