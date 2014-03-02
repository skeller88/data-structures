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
  },

  breadthFirstLog: function(results){
    var results = results || [this.value];
    var queue = [];
    queue.unshift(this.value);
    results = results.concat(queue.pop(this.value));
    if(this.left){
      queue.unshift(this.left.breadthFirstLog(results));
    }
    if(this.right){
      queue.unshift(this.right.breadthFirstLog(results));
    }

    // enqueue root node
    // dequeue node
    // enqueue children of dequeued node
    // place dequeued children into the results
    // repeat

    results.concat(this.value);

    if (this.right) {
      results = results.concat(this.right.value);
    }

    if (this.right) {
      results = results.concat(this.right.breadthFirstLog());
    }
    return results;
  }
};


// [this.value]
// run function on this array to add .value to new array
// add this.left, add this.right
// iterate over new things
//
