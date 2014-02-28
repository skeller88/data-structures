var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  //this.children = this.children === undefined ? [] : this.children;
  if (!this.children) {
    this.children = [];
  }
  this.children.push(makeTree(value));
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

