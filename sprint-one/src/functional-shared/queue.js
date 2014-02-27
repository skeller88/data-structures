/* global _ */
/* exported makeQueue, queueMethods */


var makeQueue = function(){
  var instance = {
    instanceSize: 0,
    storage: {}
  };
  _.extend(instance, makeQueue.queueMethods);
  return instance;
};

makeQueue.queueMethods = {
  enqueue: function(value){
    if(this.instanceSize > 0){
      _.each(this.storage, function(item, key){

        this.storage[Number(key)+1] = item;
      }, this);
    }
    this.storage[0] = value;
    this.instanceSize++;
  },

  dequeue: function(){
    var item = this.storage[this.instanceSize-1];
    if(this.instanceSize > 0){
      delete this.storage[this.instanceSize-1];
      this.instanceSize--;
      return item;
    }
  },

  size: function(){
    return this.instanceSize;
  }
};
