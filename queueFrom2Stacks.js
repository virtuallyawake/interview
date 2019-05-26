/*
 Implement queue using two stacks
 stack: LIFO
 queue: FIFO

 2 3 7 1
 dequeue: 2
 dequeue: 3

 4 elements
 stack1.pop -> stack2.push
 stack1.pop
 stack1.pop
 stack1.pop

 1 7 3 2 
 stack2.pop -> dequeue 2

 stack2.pop -> stack1.push x 3 
 stack1: 3 7 1
*/

function MyQueue() {
  var stack1 = [];
  var stack2 = [];

  this.enqueue = function(elem) {
    stack1.push(elem);
  }

  this.dequeue = function() {
    var stack1Length = stack1.length;
    for (var i=0; i<stack1Length; i++) {
      stack2.push(stack1.pop());
    }

    var dequeued = stack2.pop();
    var stack2Length = stack2.length;
    for (var i=0; i<stack2Length; i++) {
      stack1.push(stack2.pop());
    }

    return dequeued;
  }
}

var myQueue = new MyQueue();

myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(7);
myQueue.enqueue(1);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
