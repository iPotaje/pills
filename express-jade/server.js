var express     = require('express');
var bodyParser  = require('body-parser')
var path        = require('path');
var post        = require('./module/post');
var app         = express();

//Set express views
app.set   ('views'        , __dirname + '/views');
app.set   ('view engine'  ,'jade');

//Set express config
app.use   (express.static(path.join(__dirname, 'public'))); //public directory
app.use   (bodyParser.urlencoded({ extended: false }))      //Config bodyParser

//Set router
app.get   ('/'                  , post.index);
app.get   ('/post/create'       , post.create);
app.post  ('/post/create'       , post.save);
app.get   ('/post/details/:id'  , post.details);
app.get   ('/post/edit/:id'     , post.edit);
app.post  ('/post/update'       , post.update);
app.get   ('/post/remove/:id'   , post.remove);
app.get   ('/post/delete/:id'   , post.delete);

//Start express
app.listen(3000);
