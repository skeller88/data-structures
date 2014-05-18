/* exported Stack */

var Stack = function(){
    this.storage = {};
    this.top = 0;
    this.bottom = 0;
};

Stack.prototype = {
    pop: function(){
        if(!this.size()) return null;
        return this.storage[--this.top];
    },

    push: function(val){
        this.storage[this.top++] = val;
    },

    size: function(){
        return this.top - this.bottom;
    }
};

Stack.prototype.constructor = Stack;