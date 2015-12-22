var LandingView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html('Use above fields to view students. Select via name, id, or cohort.');
  }

});
