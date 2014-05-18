var makeStack = function(){
    var s = {};
    var storage = {};
    var top = 0;
    var bottom = 0;

    s.pop = function(){
        if(!s.size()) return null;
        return storage[--top];
    };

    s.push = function(val){
        storage[top++] = val;
    };

    s.size = function(){
        return top - bottom;
    };

    return s;
};