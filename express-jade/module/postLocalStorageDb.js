var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');

var getId = function() {
  var nextId = 0;

  while(1){
      if (!localStorage.getItem(nextId.toString())){
        return nextId.toString();
      }

      nextId = nextId + 1;
  }
}

module.exports = {
  list : function () {
    var toReturn = [];
    for(var i=0;i<localStorage.length;i++){
      toReturn.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return toReturn;
  },

  add : function (item) {
    id                = getId();
    item.id           = id;
    localStorage.setItem(item.id, JSON.stringify(item));
  },

  getById : function (id) {
    return JSON.parse(localStorage.getItem(id));
  },

  update : function (item) {
    console.log(item.id);
    localStorage.setItem(item.id, JSON.stringify(item));
  },

  remove : function (id) {
    localStorage.removeItem(id);
  }
}
