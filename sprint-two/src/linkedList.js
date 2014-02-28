/* exported makeLinkedList, makeNode */
var makeLinkedList = function(){
  var list = {
  };
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target, node){ //node param should be a list?
    var node = node || list.head;

    if(node.value === target){
      return true;
    } else if (!node.next) {
      return false;
    } else {
      return list.contains(target, node.next);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
