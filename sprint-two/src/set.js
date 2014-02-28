var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this[item] = true;
};

setPrototype.contains = function(item){
  return !!this[item];
};

setPrototype.remove = function(item){
  delete this[item];
};
