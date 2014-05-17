/* exported makeLinkedList, makeNode */

var makeLinkedList = function(){
  var ll = {};
  ll.head = null;
  ll.tail = null;

  ll.addToTail = function(value){
    var node = {value: value, next: null};
    //use head to check if linkedlist has any nodes
    if(!ll.head){
        ll.head = node;
        ll.tail = node;
        node.previous = null;
    }else{
        node.previous = ll.tail;
        ll.tail.next = node;
        ll.tail = ll.tail.next;
    }
    return value;
  };

  ll.addToHead = function(value){
    var node = {value: value, previous: null};
    if(!ll.head){
        node.next = null;
        ll.head = node;
        ll.tail = node;
    }else{
        node.next = ll.head;
        ll.head.previous = node;
        ll.head = ll.head.previous;
    }
    return value;
  }

  ll.removeHead = function(){
    if(!ll.head) return undefined;

    var oldHead = ll.head;
    ll.head = ll.head.next;
    ll.head.previous = null;
    return oldHead;
  };

  ll.removeTail = function(){
    if(!ll.tail) return undefined;

    var oldTail = ll.tail;
    ll.tail = ll.tail.previous;
    ll.tail.next = null;
    return oldTail;
  };

  ll.contains = function(value){
    var node = ll.head;
    while(node){
        if(node.value === value) return true;
        node = node.next;
    }
    return false;
  };

  return ll;
};