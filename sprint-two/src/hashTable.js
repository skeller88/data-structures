var HashTable = function(limit){
    this.storage = makeLimitedArray(limit);
    this.limit = limit;
    this.size = 0;
};

HashTable.prototype = {

    insert: function(key, value){
        var h = getIndexBelowMaxForKey(key, this.limit);

        if(!this.storage.get(h)) this.size++;
        if(this.size/this.limit > .75){
            this.limit*=2;
            this.resize();
        }

        this.storage.set(h, value);
    },
    retrieve: function(key){
        var h = getIndexBelowMaxForKey(key, this.limit);

        return this.storage.get(h);
    },
    remove: function(key){
        var h = getIndexBelowMaxForKey(key, this.limit);

        this.size--;

        var removedVal = this.storage.get(h);

        this.storage.set(h, null);

        if(this.size/this.limit < .25){
            this.limit/=2;
            this.resize();
        }

        return removedVal;
    },
    resize: function(){
        var newStorage = makeLimitedArray(this.limit);
        this.storage.each(function(el, ind, arr){
            newStorage.set(ind, el);
        })
    }
}