var StudentsView = Backbone.View.extend({

  el: $('div #page-content-container'),

  initialize: function() {
    this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    var html = [];
    this.collection.forEach(function(item){
      item.set('first', item.get('name').split(' ')[0]);
      item.set('last', item.get('name').split(' ')[1]);
      var eachStudent = new StudentEntryView({model: item});
      html.push(eachStudent.render().el);
    });
    this.$el.html(html);
  }

});
