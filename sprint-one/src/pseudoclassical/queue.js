/* global _ */
/* exported Queue */


var Queue = function(){
    this.storage = {};
    this.end = 0;
    this.start = 0;
};

Queue.prototype = {
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
};

Queue.prototype.constructor = Queue;