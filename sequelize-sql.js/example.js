var lib = require('./patch.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('sqlite://dbname', {dialectModulePath: 'sql.js'});

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
