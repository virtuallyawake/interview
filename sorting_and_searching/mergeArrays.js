/*
input: sorted array A and sorted array B
merge B into A
A: [ 3 5 6 7 0 0 0 ]
B: [ 1 7 8 ]

output: [ 1 3 5 6 7 7 8]
*/

var A = [3, 5, 6, 7, 0, 0, 0];
var B = [1, 7, 8];

// Fill array back to front
function mergeArrays(A, numElementsA, B) {
  var pA = numElementsA-1;
  var pB = B.length-1;

  for (var i=A.length-1; i >= 0; i--) {
    if (pA >= 0 && pB >= 0) {
      if (A[pA] > B[pB]) {
	A[i] = A[pA];
	pA--;
      } else {
	A[i] = B[pB];
	pB--;
      }
    } else {
      if (pA >= 0) {
	A[i] = A[pA];
	pA--;	
      } else {
	A[i] = B[pB];
	pB--;
      }
    }
  }
}

// Quick sort
/*
var A = [3, 5, 6, 7];
var B = [1, 7, 8];

B.forEach(function (elem) {
  A.push(elem);
})
*/
//console.dir(A);   // [3, 5, 6, 7, 1, 7, 8]

function swap(A, i, j) {
  var tmp = A[i];
  A[i] = A[j];
  A[j] = tmp;
}

function partition(A, left, right) {
  var pivot = A[left];
  var j = left + 1;
  for (var i=left+1; i<=right; i++) {
    if (A[i] < pivot) {
      swap(A, i, j);
      j++;
    }
  }
  j--;
  swap(A, left, j);
  return j;
}

function quickSort(A, left, right) {
  if (left >= right)
    return;

  var pivotIndex = partition(A, left, right);

  quickSort(A, left, pivotIndex-1);
  quickSort(A, pivotIndex+1, right);
}

//quickSort(A, 0, 6);
mergeArrays(A, 4, B);
console.dir(A);
