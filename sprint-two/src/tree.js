var makeTree = function(value, parent){
    var tree = {};
    tree.value = value || null;
    tree.children = [];
    tree.parent = parent || null;

    tree.addChild = function(value){
        var newTree = makeTree(value, tree);
        tree.children.push(newTree);
        return newTree;
    };

    tree.removeFromParent = function(){
        var removedParent = tree.parent;
        var index = removedParent.children.indexOf(tree.value);
        removedParent.children.splice(1, index);
        tree.parent = null;
        return removedParent;
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

    tree.traverse = function(callback){

        callback.call(this);

        if(tree.children.length){
            for (var i = 0; i < tree.children.length; i++) {
                tree.children[i].traverse(callback);
            }
        }
    };

    return tree;
};