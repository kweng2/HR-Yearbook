var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route');
      this.renderLanding();
    }.bind(this));


    var sView = new StudentsView({collection: options.newStudents});

    options.navbar.on('selectedName', function(){
      var selectedStudentName = options.navbar.$el.children('#student_name').children('input').val();
      options.newStudents.url = 'https://hr-yearbook.herokuapp.com/api/students?name=' + selectedStudentName;
      this.renderStudents(options.newStudents);
    }.bind(this));

    options.navbar.on('selectedId', function(){
      var selectedStudentName = options.navbar.$el.children('#student_id').children('input').val();
      options.newStudents.url = 'https://hr-yearbook.herokuapp.com/api/students?id=' + selectedStudentName;
      this.renderStudents(options.newStudents);
    }.bind(this));

    options.navbar.on('selectedCohort', function(){
      var selectedStudentName = options.navbar.$el.children('#student_cohort').children('input').val();
      options.newStudents.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + selectedStudentName;
      this.renderStudents(options.newStudents);
    }.bind(this));

  },

  renderStudents: function(studentsView) {
    spinnerInit();
    studentsView.populateStudents();
  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());
  }
});
