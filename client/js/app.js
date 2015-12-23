var app = new AppView({
  router: new AppRouter(),
  navbar: new NavBarView(),
  newStudents: new Students()
});

// http://backbonejs.org/#History
Backbone.history.start();

