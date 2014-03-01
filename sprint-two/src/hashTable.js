var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._bins = 0;
};

HashTable.prototype.insert = function(k, v){

  if (this._bins / this._limit >= (.75)) {
    this._limit *= 2;
  }

  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket) {
    this._storage.set(i, [[k, v]]);
    this._bins++;
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] !== null && bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i] !== null && bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){

  if (this._bins / this._limit <= (.25)) {
    this._limit /= 2;
  }

  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] !== null && bucket[i][0] === k) {
      bucket.splice(i, 1);
      if (!bucket.length) {
        this._bins--;
        bucket = undefined;
        return; //bucket isn't there any more, so no need to iterate again
      }
    }
  }
};
