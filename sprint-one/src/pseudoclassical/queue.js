/* global _ */
/* exported Queue */
var Queue = function() {
  this.instanceSize = 0;
  this.storage = {};
};

//create prototype with all methods contained
//remember to include 'constructor' property so that constructor references Queue
Queue.prototype = {
  constructor: Queue,

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
