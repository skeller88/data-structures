makeBinarySearchTree = function(value){
    var node = {};
    node.leftDepth = 1;
    node.rightDepth = 1;
    node.maxDepth = 1;
    node.minDepth = 1;
    node.value = value || null;

    //assume new value won't have the same value as
    //any node
    node.insert = function(value){
        if(value > node.value){
            if(node.right){
                node.rightDepth++;
                node.maxDepth = Math.max(node.rightDepth, node.leftDepth);
                node.minDepth = Math.min(node.rightDepth, node.leftDepth);
                node.right.insert(value);

                if(node.minDepth && node.maxDepth/node.minDepth > 2){
                    node.rebalance(); 
                }
            }else{
                node.right = makeBinarySearchTree(value);
            }
        }else if(value < node.value){
            if(node.left){
                node.leftDepth++;
                node.maxDepth = Math.max(node.rightDepth, node.leftDepth);
                node.minDepth = Math.min(node.rightDepth, node.leftDepth);
                node.left.insert(value);

                if(node.minDepth && node.maxDepth/node.minDepth > 2){
                    node.rebalance(); 
                }
            }else{
                node.left = makeBinarySearchTree(value);
            }
        }else{
            throw 'A node with this value already exists.'
        }
    };

    node.rebalance = function(){
        var orderedNodes = [];
        node.leftDepth = 0;
        node.rightDepth = 0;
        
        node.depthFirstLog(function(value){
            orderedNodes.push(value);
        });

        var mid = orderedNodes.splice(orderedNodes.length/2, 1)[0];

        node = makeBinarySearchTree(mid);

        for (var i = 0; i < orderedNodes.length; i++) {
            node.insert(orderedNodes[i]);
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

        while(nextNode = toCheck.shift()){
            result.push(nextNode.value);
            
            if(nextNode.left){
                toCheck.push(nextNode.left);
            }
            if(nextNode.right){
                toCheck.push(nextNode.right);
            }
        }
        return result;
    };

    return node;
};

var n = makeBinarySearchTree(4);
n.insert(6);
n.breadthFirstLog();
n.breadthFirstLog();
n.insert(7);
n.insert(8);
n.insert(9);
n.breadthFirstLog();
