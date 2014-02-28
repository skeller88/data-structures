/* exported makeLinkedList, makeNode */

//linked list has been given double linked list functionality
var makeLinkedList = function(){
  var list = {
  };
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var node = makeNode(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.addToTail = function(value){
    var node = makeNode(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = list.head.next;
    list.head.previous = null;
    return result;
  };

  list.removeTail = function(){
    var result = list.tail;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return result;
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
  node.previous = null;
  node.next = null;

  return node;
};
