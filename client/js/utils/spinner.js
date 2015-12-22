// spin.js http://fgnass.github.io/spin.js/
var spinnerInit = function () {
  $('#page-content-container').prepend('<div id="loading-image"></div>');
  var opts = {
     lines: 16,
     length: 10,
     width: 4,
     radius: 20,
     corners: 1,
     rotate: 0,
     color: '#000',
     speed: 1,
     trail: 60,
     shadow: false,
     hwaccel: false,
     className: 'spinner',
     zIndex: 2e9,
     top: '50%',
     left: '50%',
     visibility: true
  };
  var spinner = new Spinner(opts).spin(document.getElementById('loading-image'));
};

var spinnerRemove = function() {
  $('#loading-image').remove();
};
