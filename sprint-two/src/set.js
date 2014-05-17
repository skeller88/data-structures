var makeSet = function(){
    var setMethods = {
        add: function(value){
            storage[JSON.stringify(value)] = true;
        },
        contains: function(value){
            return !!storage[JSON.stringify(value)];
        },
        remove: function(value){
            delete storage[JSON.stringify(value)];
        }
    };
    var set = Object.create(setMethods);
    var storage = {};
    return set;
};

var s = makeSet();
s.add([1,2,3]);
s.contains([1,2,3])