var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (options) {
    this.url = 'https://hr-yearbook.herokuapp.com/api/students';
  },

  populateStudents: function() {
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
    this.fetch();
  }
});
