/*
 New stack is created when previous stack exceeds a threshold.
 setOfStacks.push()
 setOfStacks.pop()

 1 5 2 7 9 5 2 4 5 1
 threshold = 3
 [1, 5, 2]
 [7, 9, 5]
 [2, 4, 5]
 [1]
*/

var setOfStacks = [];
var threshold = 3;
var numElements = 0;

function push(elem) {
  if (numElements === 0)
    setOfStacks.push([]);

  var stack = setOfStacks[setOfStacks.length -1];
  if (stack.length === threshold) {
    var newStack = [elem];
    setOfStacks.push(newStack);
    return;
  }
  
  stack.push(elem);
  numElements++;
}

function pop() {
  if (numElements === 0)
    return null;

  var stack = setOfStacks[setOfStacks.length -1];
  var elem = stack.pop();
  if (stack.length === 0) {
    setOfStacks.pop();
  }

  numElements--;
  return elem;
}

function popAt(stackNum) {
  if (stackNum >= setOfStacks.length)
    return null;
  if (stackNum < 0)
    return null;

  var stack = setOfStacks[stackNum];
  var elem = stack.pop();
  if (elem)
    numElements--;
  return elem;
}

// 1 5 2 7 9 5 2 4 5 1

pop()
push(1)
push(5)
push(2)
push(7)
push(9)
push(5)
push(2)
push(4)
push(5)
push(1)
/*
console.log("Pop: " + pop()); // 1
console.log("Pop: " + pop()); // 5
console.log("Pop: " + pop()); // 4
console.log("Pop: " + pop()); // 2
console.log("Pop: " + pop()); // 5
console.log("Pop: " + pop()); // 9
console.log("Pop: " + pop()); // 7
*/

console.log("PopAt: " + popAt(1)); // 5
console.log("PopAt: " + popAt(1)); // 9
console.log("PopAt: " + popAt(1)); // 7
console.log("PopAt: " + popAt(1)); // ??
