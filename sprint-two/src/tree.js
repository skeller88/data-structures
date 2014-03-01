var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  //this.children = this.children === undefined ? [] : this.children;
  if (!this.children) {
    this.children = [];
  }
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function(){
  var index = this.parent.children.indexOf(this);
  this.parent.children.splice(index, 1);
  this.parent = null;
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      } else if (i === this.children.length - 1) {
        return false;
      }
    }
  }
  return false;
};

treeMethods.traverse = function(callback){
  if (this.value) {
    this.call(this, callback);
  }
  if(this.children){
    for(var i = 0; i < this.children.length; i++){
      this.children[i].traverse(callback);
    }
  }
};

