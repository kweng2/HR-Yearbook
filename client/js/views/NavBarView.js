var NavBarView = Backbone.View.extend({
  
  el: '#navbar-container',
  initialize: function() {
    this.render();

    var nameSelector = this.$el.children('#student_name');
    var idSelector = this.$el.children('#student_id');
    var cohortSelector = this.$el.children('#student_cohort');

    // parse the name selector and display page with student of this name
    nameSelector.submit(function(event){
      event.preventDefault();
      var selectedName = nameSelector.children('input').val();
      var newStudents = new Students({sname: selectedName});
    });

    // parse the ID selector and display page with student of this ID
    idSelector.submit(function(event){
      event.preventDefault();
      var selectedId = idSelector.children('input').val();
      var newStudents = new Students({sid: selectedId});
    });

    // parse the cohort selector and display page with students of this cohort
    cohortSelector.submit(function(event){
      event.preventDefault();
      var selectedCohort = cohortSelector.children('input').val();
      var newStudents = new Students({cohort: selectedCohort});
    });
  },

  render: function() {
    // this.$el.append('Click here to see HR37\'s students');
  }

});

