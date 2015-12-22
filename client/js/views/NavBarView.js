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
      this.trigger('selectedName');
    }.bind(this));

    // parse the ID selector and display page with student of this ID
    idSelector.submit(function(event){
      event.preventDefault();
      this.trigger('selectedId');
    }.bind(this));

    // parse the cohort selector and display page with students of this cohort
    cohortSelector.submit(function(event){
      event.preventDefault();
      this.trigger('selectedCohort');
    }.bind(this));
  },

  render: function() {
    // this.$el.append('Click here to see HR37\'s students');
  }

});

