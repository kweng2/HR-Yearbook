var StudentsView = Backbone.View.extend({

  el: $('div #page-content-container'),

  initialize: function() {

    this.render();
    // this.collection.on('all', this.render, this);
  },

  template: _.template('<div class="student" data-id="<%- _id %>"> \
                          <div class="studentName"><%- name %></div> \
                          <img src = "<%- image %>" /> \
                        </div>'),

  render: function() {
    var html = [];
    this.collection.forEach(function(item){
      // html.push(item.render());
      var eachStudent = new StudentEntryView({model: item});
      html.push(eachStudent.render());
    });
    this.$el.html(html);
  }

});
