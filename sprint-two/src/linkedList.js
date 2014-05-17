/* exported makeLinkedList, makeNode */

var makeLinkedList = function(){
  var ll = {};

  ll.addToTail = function(value){
    var node = {value: value, next: null};
    if(!ll.head){
        ll.head = node;
        ll.tail = node;
    }else{
        ll.tail.next = node;
        ll.tail = ll.tail.next;
    }
    return value;
  };

  ll.removeHead = function(){
    if(!ll.head) return undefined;

    var oldHead = ll.head;
    var newHead = ll.head.next;
    ll.head = ll.head.next;
    return oldHead;
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