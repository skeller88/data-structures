/* global _ */
/* exported makeQueue */

var makeQueue = function(){
    var q = {};
    var storage = {};
    var end = 0;
    var start = 0;

    q.enqueue = function(val){
        storage[end++] = val;
    };

    q.dequeue = function(){
        if(start < end){
            return storage[start++];
        }
    };

    q.size = function(){
        return end - start;
    }

    return q;
};