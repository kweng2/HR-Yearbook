var InfoWindowView = Backbone.View.extend({

  el: '#info-window-container',
  initialize: function() {
    this.render();
  },

  template: _.template('<div><%- nickname %> <%- first %> <%- last %></div>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});
