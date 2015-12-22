// This view is for dynamic displays when mouse hovers over the student

var StudentEntryView = Backbone.View.extend({
  initialize: function() {
    // this.render();
  },

  template: _.template('<div class="student" data-id="<%- _id %>"> \
                          <div class="studentName"><%- name %></div> \
                          <img src = "<%- image %>" width="300px" /> \
                        </div>'),

  render: function() {
    var studentName = this.model.get('name');
    var studentImage = this.model.get('image');
    var studentNickName = generateNickname();

    this.$el.html(this.template(this.model.attributes));

    console.log('got to studentEntryView');
    // debugger;
    return this.$el.html();

  }

});
