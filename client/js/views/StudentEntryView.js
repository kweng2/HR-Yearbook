// This view is for dynamic displays when mouse hovers over the student

var StudentEntryView = Backbone.View.extend({

  events: {
    'mouseenter': 'clicked',
  },

  clicked: function() {
    var info = new InfoWindowView({model: this.model});
  },

  initialize: function() {
  },

  template: _.template('<div class="studentName"><%- name %></div> \
                          <div class="img-shadow"><img src = "<%- image %>" width="300px" class="studentImage"/></div>'),

  render: function() {
    this.$el.addClass('student');
    this.$el.attr('data-id', this.model.get('id'));
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
