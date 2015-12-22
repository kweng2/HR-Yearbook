var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route');
      this.renderLanding();
    }.bind(this));

    options.navbar.on('nameSelected', function(){
      console.log('triggering event for nameSelected bubbled up to AppView');
    });
  },

  renderCohort: function(cohort) {
  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());
  }
});
