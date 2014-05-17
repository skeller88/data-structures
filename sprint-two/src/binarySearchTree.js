makeBinarySearchTree = function(value){
    var node = {};
    node.value = value || null;

    //assume new value won't have the same value as
    //any node
    node.insert = function(value){
        if(value > node.value){
            if(node.right){
                node.right.insert(value);
            }else{
                node.right = makeBinarySearchTree(value);
            }
        }else if(value < node.value){
            if(node.left){
                node.left.insert(value);
            }else{
                node.left = makeBinarySearchTree(value);
            }
        }else{
            throw 'A node with this value already exists.'
        }
    };

    node.contains = function(value){
        if(node.value === value) return true;

        if(node.right){
            if(node.right.contains(value)){
                return true;
            };
        }else if(node.left){
            if(node.left.contains(value)){
                return true;
            }
        }
        return false;
    };

    node.depthFirstLog = function(callback){
        callback(node.value);

        if(node.right){
            node.right.depthFirstLog(callback);
        }
        if(node.left){
            node.left.depthFirstLog(callback);
        }
    };

    node.breadthFirstLog = function(){
        var toCheck = [node];
        var result = [];

        while(node = toCheck.shift()){
            result.push(node.value);
            
            if(node.left){
                toCheck.push(node.left);
            }
            if(node.right){
                toCheck.push(node.right);
            }
        }
        return result;
    };

    return node;
};