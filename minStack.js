/*
Design a stack with push(), pop() and min(), where all operations are O(1)
 3 5 6 2 6 7 1
min = [3, 2, 1] 
*/

var A = [];
var min = [];
function push(elem) {
  if (min.length === 0) {
    min.push(elem);
  } else {
    if (elem < min[min.length-1])
      min.push(elem);
  }

  A.push(elem);
}

function pop() {
  var elem = A.pop();
  if (elem === min[min.length-1])
    min.pop();

  return elem;
}

function minFunc() {
  return min[min.length-1];
}

push(3);
push(5);
push(6);
push(2);
push(6);
push(7);
push(1);

console.log(minFunc()); // 1
console.log("Pop: " + pop());
console.log(minFunc()); // 2
console.log("Pop: " + pop());
console.log("Pop: " + pop());
console.log("Pop: " + pop());
console.log(minFunc()); // 3

