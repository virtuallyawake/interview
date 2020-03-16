/* 
Suppose you have an array of integers 5, 3, 9, 1 (the array is length n) and a value k
Find the kth largest value in the array e.g.
k = 0 => 9
k = 1 => 5
k = n-1 => 1
*/

function findKthLargest(arr, k) {
	arr.sort(function (a, b) {
  	return b - a;
  });
  // arr = [9, 5, 3, 1]
  return arr[k];
}

function findKthLargest2(arr, k) {
	var n = arr.length;
	return quickSelect(arr, 0, n-1, n-1-k);
}

function partition(arr, left, right, k) {
    var pivot = arr[left];
    var p1 = left+1;

    for (var i=p1; i<=right; i++) {
  	if (arr[i] < pivot) {
    	    swap(arr, i, p1);
	    p1++;
	}
    }
    
    p1--;
    swap(arr, left, p1);
    return p1;
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function quickSelect(arr, left, right, k) {
    var pivotIndex = partition(arr, left, right);
    
    if (k === pivotIndex) {
  	return arr[k];
    }
    if (k > pivotIndex) {
  	return quickSelect(arr, pivotIndex + 1, right, k);
    } else {
  	return quickSelect(arr, left, pivotIndex - 1, k);
    }
}

var A = [5, 3, 9, 1];

console.log(findKthLargest2(A, 0));  // 9
console.log(findKthLargest2(A, 1));  // 5
console.log(findKthLargest2(A, 3));  // 1

