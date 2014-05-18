/* global _ */
/* exported makeQueue, queueMethods */

var queueMethods = {
    enqueue: function(val){
        this.storage[this.end++] = val;
    },

    dequeue: function(){
        if(this.start < this.end){
            return this.storage[this.start++];
        }
    },

    size: function(){
        return this.end - this.start;
    }
}

var makeQueue = function(){
    var q = {};
    q.storage = {};
    q.end = 0;
    q.start = 0;
    _.extend(q, queueMethods);

    return q;
};