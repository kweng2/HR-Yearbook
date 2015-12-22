var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (options) {
    // this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + options.cohort;
    this.url = 'https://hr-yearbook.herokuapp.com/api/students';
    if(options.cohort) {
      this.url+= '?cohort=' + options.cohort;
      this.populateStudents();
    }
    else if(options.sname) {
      this.url+= '?name=' + options.sname;
      this.populateStudents();
    }
    else if(options.sid) {
      this.url+= '?id=' + options.sid;
      this.populateStudents();
    }

  },

  populateStudents: function() {
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
    var that = this;
    this.fetch({
      success: function(collection, response, options) {
        console.log('Successfully fetched from herokuapp.com/api/students');
        var studentsView = new StudentsView({collection: that});
      }
    });
  }
});
