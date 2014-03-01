var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._values = 0;
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket) {
    var newBucket = [];
    newBucket.push([k,v]);
    this._storage.set(i, newBucket);
    this._values++;

    if (this._values / this._limit >= (.75)) {
      this._limit *= 2;
      this.rehash();
    }
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k,v]);
  this._values++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  if (this._values / this._limit <= (.25)) {
    this._limit /= 2;
    this.rehash();
  }

  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._values--;
      if (!bucket.length) {
        bucket = undefined;
        return; //bucket isn't there any more, so no need to iterate again
      }
    }
  }
};

HashTable.prototype.rehash = function(){
  // make a new limitedArray with the new limit
  var newStorage = makeLimitedArray(this._limit);
  var oldStorage = this._storage;
  var hashTable = this;

  hashTable._values = 0;
  hashTable._storage = newStorage;
  // go through each bucket in old limited Array
  oldStorage.each(function(bucket){
    // go through each [k,v] in that bucket
    if(bucket !== undefined){
      for(var i = 0; i < bucket.length; i++){
        hashTable.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
};
