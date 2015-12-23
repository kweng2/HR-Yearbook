var generateNickname = function() {
  var names = ['Danger', 'Veracious', 'L337', 'Zero Cool', 'N00B Cannon', 'Wicked', 'Jolly',
  'The Benefactor', 'Morpheus', 'Hellboy', '!!!', '$$$', 'Milk Man', 'Your Highness'];
  var index = Math.floor((Math.random() * names.length));
  return names[index];
};
