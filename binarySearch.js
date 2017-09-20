// Binary search
// Look for element X in sorted array

var x = 4;
var A = [1,3,4,6,7,9,11,12];

function binarySearch(x, A, left, right) {
  var midPoint = left + Math.floor((right-left+1)/2);
  if (left === right)
    return -1;
  if (x === A[midPoint])
    return midPoint;
  if (x < A[midPoint]) {
    return binarySearch(x, A, left, midPoint-1);
  } else {
    return binarySearch(x, A, midPoint+1, right)
  }
}

var index = binarySearch(x, A, 0, 7);
console.log("index = " + index);