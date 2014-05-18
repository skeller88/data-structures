var Graph = function(){
    this.nodes = {};
    this.edges = {};
    this.orderAdded = [];
};

Graph.prototype.addNode = function(newNode, toNode){
    if(!newNode) return;

    this.nodes[newNode] = true;
    this.orderAdded.push(newNode);
    this.edges[newNode] = {};

    if(this.orderAdded.length === 1){
        this.firstNode = newNode;
    }else if(this.orderAdded.length === 2 && !toNode){
        toNode = this.firstNode;
    }

    if(this.orderAdded.length >= 2){
        this.edges[newNode][toNode] = true;
        this.edges[toNode][newNode] = true;
    }
};

Graph.prototype.contains = function(node){
    return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
    delete this.nodes[node];

    if(node === this.firstNode){
        this.orderAdded.shift();

        if(this.orderAdded.length){
            this.firstNode = this.orderAdded[0];
        }
    }

    var deletedEdges = Object.keys(this.edges[node]);
    delete this.edges[node];

    for (var i = 0; i < deletedEdges.length; i++) {
        //'connected node'
        var cn = deletedEdges[i];
         delete this.edges[cn][node];
         if(!Object.keys(cn).length){
             this.removeNode(cn);
         }
     }
};

Graph.prototype.getEdge = function(fromNode, toNode){
    return !!this.edges[fromNode][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
    this.edges[fromNode][toNode] = true;
    this.edges[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
    delete this.edges[fromNode][toNode];
    delete this.edges[toNode][fromNode];
    if(!Object.keys(this.edges[fromNode]).length){
        this.removeNode(fromNode);
    }
    if(!Object.keys(this.edges[toNode]).length){
        this.removeNode(toNode);
    }
};

var g = new Graph();
g.addNode(1);
// g.addNode(2)