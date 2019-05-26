/*
3 stacks out of a single array
stack: LIFO
push()
pop()
[1]
l: length (20)
elements per stack: n = Math.floor(l/3) (n=6)
stack1: [0, n-1]
stack2: [n, 2*n-1]
stack3: [2*n, 3*n-1], [2*n, l-1]
*/

var A = new Array(20);
var lengthPerStack = Math.floor(A.length/3);
var pointers = [0, lengthPerStack, 2*lengthPerStack];

function push(stackNum, elem) {
  var p = pointers[stackNum-1];
  if (p > stackNum*lengthPerStack-1) {
    return null;
  }

  A[p] = elem;
  pointers[stackNum-1]++;
  return elem;
}

function pop(stackNum) {
  var p = pointers[stackNum-1];
  if (p <= (stackNum-1)*lengthPerStack) {
    return null;
  }

  pointers[stackNum-1]--;
  var elem = A[pointers[stackNum-1]];
  return elem;
}

console.dir(A);
push(1, 1);
push(1, 2);
push(1, 3);
push(2, 4);
push(2, 5);
push(2, 6);
push(3, 7);
push(3, 8);
push(3, 9);
console.dir(A);
pop(1);
pop(2);
pop(3);
push(1, 11);
push(2, 22);
push(3, 33);
console.dir(A);


