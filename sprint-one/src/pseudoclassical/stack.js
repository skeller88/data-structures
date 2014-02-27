/* exported Stack */

var Stack = function() {
  this.instanceSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
    this.storage[this.instanceSize++] = value;
  };

Stack.prototype.pop = function(){
    var item = this.storage[this.instanceSize-1];
    if(this.instanceSize > 0){
      delete this.storage[this.instanceSize-1];
      this.instanceSize--;
      return item;
    }
  };

Stack.prototype.size = function(){
    return this.instanceSize;
  };


//   {
//   push : function(value){
//     this.storage[this.instanceSize++] = value;
//   },
//   pop : function(){
//     var item = this.storage[this.instanceSize-1];
//     if(this.instanceSize > 0){
//       delete this.storage[this.instanceSize-1];
//       this.instanceSize--;
//       return item;
//     }
//   },
//   size : function(){
//     return this.instanceSize;
//   }
// };
