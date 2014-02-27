/* exported makeStack, stackMethods */



var stackMethods = {
  push : function(value){
    this.storage[this.instanceSize++] = value;
  },
  pop : function(){
    var item = this.storage[this.instanceSize-1];
    if(this.instanceSize > 0){
      delete this.storage[this.instanceSize-1];
      this.instanceSize--;
      return item;
    }
  },
  size : function(){
    return this.instanceSize;
  }
};


var makeStack = function(){

  var instance = Object.create(stackMethods);
  instance.instanceSize = 0;
  instance.storage = {};

  return instance;
};
