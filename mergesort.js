/* MergeSort */

function mergeSort(Arr, left, right) {
    if (left === right)
        return [Arr[left]];

    var midPoint = left + Math.floor((right-left+1)/2);
    var A = mergeSort(Arr, left, midPoint-1);
    var B = mergeSort(Arr, midPoint, right);
    
    // Merge A and B
    var C = [];
    var i = 0;
    var j = 0;
    for (var k=0; k<right-left+1; k++) {
        if (A[i] && B[j]) {
            if (A[i] > B[j]) {
                C.push(A[i]);
                i++;
            } else {
                C.push(B[j]);
                j++;
            }
        } else {
            if (A[i]) {
                C.push(A[i]);
                i++;
            } else {
                C.push(B[j]);
                j++;
            }
        }
    }
    return C;
}

var A = [6,3,2,1,7,9];
var sorted = mergeSort(A, 0, 5);
console.dir(sorted);