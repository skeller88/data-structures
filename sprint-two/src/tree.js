var makeTree = function(value){
    var tree = {};
    tree.value = value || null;
    tree.children = [];

    tree.addChild = function(value){
        var newTree = makeTree(value);
        tree.children.push(newTree);
        return newTree;
    };

    tree.contains = function(value){
        var toCheck = [tree];
        var node;
        while(node = toCheck.shift()){
            if(node.value === value) return true;

            if(node.children.length){
                for (var i = 0; i < node.children.length; i++) {
                    toCheck.push(node.children[i]);
                }
            }
        }
        return false;
    };

    return tree;
};