var memoryDb  = {};
var id        = 0;

module.exports = {
  list : function () {
    return memoryDb;
  },

  add : function (item) {
    id                = id + 1;
    item.id           = id;
    memoryDb[item.id] = item;
  },

  getById : function (id) {
    return memoryDb[id];
  },

  update : function (item) {
    console.log(item.id);
    memoryDb[item.id] = item;
  },

  remove : function (id) {
    delete memoryDb[id];
  }
}
