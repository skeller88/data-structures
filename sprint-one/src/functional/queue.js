/* global _ */
/* exported makeQueue */
var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    if(size > 0){
      _.each(storage, function(item, key){
        storage[Number(key)+1] = item;
      });
    }
    storage[0] = value;
    size++;
  };

  instance.dequeue = function(){
    var item = storage[size-1];
    if(size > 0){
      delete storage[size-1];
      size--;
      return item;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
