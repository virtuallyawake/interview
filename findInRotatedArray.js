/*
Input: sorted array (ascending) that has been rotated.
Find x in array.
*/

function binarySearch(A, x, left, right) {
    var midPoint = left + Math.floor((right-left+1)/2);
    if (A[midPoint] === x)
        return midPoint;
    if (left === right)
        return -1;
    if (x < A[midPoint])
        return binarySearch(A, x, left, midPoint-1);
    if (x > A[midPoint])
        return binarySearch(A, x, midPoint+1, right);
}

function findTransitionIndex(A) {
    for (var i=1; i<A.length; i++) {
        if (A[i] < A[i-1])
            return i;
    }
    return 0;
}

function findX(A, x) {
    var index = findTransitionIndex(A);
    if (x < A[index])
        return -1;
    if (x <= A[A.length-1]) {
        return binarySearch(A, x, index, A.length-1);
    } else {
        return binarySearch(A, x, 0, index-1);
    }
}

var A = [13, 17, 19, 21, 1, 2, 4, 6, 8, 9];
var x = 9;

console.log(findX(A, x));

