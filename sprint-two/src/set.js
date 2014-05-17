var makeSet = function(){
    var setMethods = {
        add: function(value){
            storage[value] = true;
        },
        contains: function(value){
            return !!storage[value];
        },
        remove: function(value){
            delete storage[value];
        }
    };
    var set = Object.create(setMethods);
    var storage = {};
    return set;
};