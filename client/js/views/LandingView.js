var LandingView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html('Reached LandingView as a backbone view');
  }

});
