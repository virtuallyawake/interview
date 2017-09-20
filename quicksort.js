/* quicksort
Pick a pivot.
All numbers less than pivot to its left
All numbers greater than pivot to its right.
quicksort the left array.
quicksort the right array.
*/

function partition(A, left, right) {
  var pivot = A[left];
  var i = left+1;
  for (var j = i; j<=right; j++) {
    if (A[j] < pivot) { // swap A[i] and A[j]
      var tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
      i++;
    }
  }
  // Swap pivot and A[i-1]
  A[left] = A[i-1];
  A[i-1] = pivot;
  return i-1;
}

function quicksort(A, left, right, count) {
  count++;
  var index = partition(A, left, right);
  console.log("left=" +left+", right="+right+", p=" + index);
  
  // left of the pivot
  if (left < index - 1)
    quicksort(A, left, index-1, count);
  // right of the pivot
  if (index + 1 < right)
    quicksort(A, index + 1, right, count);
}

var A = [5, 2, 1, 8, 4, 3, 6];

quicksort(A, 0, 6, 0);
console.dir(A);
