var makeBinarySearchTree = function(value){
  var newBST = Object.create(bstMethods);
  newBST.value = value;
  newBST.left = undefined;
  newBST.right = undefined;
  return newBST;
};

var bstMethods = {
  insert: function(value) {
    var node = makeBinarySearchTree(value);
    if (value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    } else {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    }
  },

  contains: function(value) {
    if(this.value === value) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(value)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(value)){
        return true;
      }
    }
    return false;
  },

  depthFirstLog: function(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  }
};
