/* global _ */
/* exported Queue */
var Queue = function() {
  this.instanceSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  if(this.instanceSize > 0){
    _.each(this.storage, function(item, key){
      this.storage[Number(key)+1] = item;
    }, this);
  }
  this.storage[0] = value;
  this.instanceSize++;
};

Queue.prototype.dequeue = function(){
  var item = this.storage[this.instanceSize-1];
  if(this.instanceSize > 0){
    delete this.storage[this.instanceSize-1];
    this.instanceSize--;
    return item;
  }
};

Queue.prototype.size = function(){
  return this.instanceSize;
};
