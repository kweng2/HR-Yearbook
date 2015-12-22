// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
  },

  landing: function() {
    console.log('Reached router\'s landing event');
  },

});
