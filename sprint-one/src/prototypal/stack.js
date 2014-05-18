/* exported makeStack, stackMethods */

var stackMethods = {
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

var makeStack = function(){
    var s = Object.create(stackMethods);
    s.storage = {};
    s.top = 0;
    s.bottom = 0;

    return s;
};
