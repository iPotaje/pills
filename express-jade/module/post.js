var util  = require('util');
// var db    = require('./postMemoryDb');
var db = require('./postLocalStorageDb');

module.exports = {
  index : function (req, res) {
    res.render('post/index', {
      posts : db.list(),
      title : "Items"
    });
  },

  create : function (req, res) {
    res.render('post/create', {
      post    : {name:"",desc:""},
      title   : "New Item",
      submit  : "Create item"
    });
  },

  details : function (req, res) {
    var post = db.getById(req.params.id);
    res.render('post/details', {
      post  : post,
      title : "Details"
    });
  },

  edit : function (req, res) {
    var post = db.getById(req.params.id);
    res.render('post/edit', {
      post    : post,
      title   : "Edit Item",
      submit  : "Edit item"
    })
  },

  save : function (req, res) {
    db.add({
      name  : req.body.name,
      desc  : req.body.desc
    });
    res.redirect('/');
  },

  update : function (req, res) {
    db.update({
      id    : req.body.id,
      name  : req.body.name,
      desc  : req.body.desc
    });
    res.redirect('/');
  },

  delete : function (req, res) {
    var post = db.getById(req.params.id);
    res.render('post/delete', {
      post    : post,
      title   : "Delete Item",
      submit  : "Delete item"
    })
  },

  remove : function (req, res) {
    db.remove(req.params.id);
    res.redirect('/');
  }
}
