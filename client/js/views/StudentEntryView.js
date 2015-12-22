// This view is for dynamic displays when mouse hovers over the student

var StudentEntryView = Backbone.View.extend({
  $el: $('.student'),

  initialize: function() {
    // this.render();
  },

  template: _.template('<div class="student" data-id="<%- _id %>"> \
                          <div class="studentName"><%- name %></div> \
                          <div class="img-shadow"><img src = "<%- image %>" width="300px" class="studentImage"/></div> \
                        </div>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el.html();
  }

});
