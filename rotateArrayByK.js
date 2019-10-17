arr = [0,1,2,3,4,5,6];
k = 3;
// [3,4,5,0,1,2]
/* old pos  |   new pos
    0         3          (0+3) % 7 = 3
    1         4          (1+3) % 7 = 4
    2         5          (2+3) % 7 = 5
    3         6          (pos+k) % N
    4         0          (4+3) % 7 = 1
    5         1          (5+3) % 7 = 2
    6         2

[0,1,2]
k = 1
0   1
1   2
2   0
k = 2
0   2
2   1
1   0
k = 3
0   0
[0,1,2,3]
k=2
0 2

 */

function getNewPosition(pos, k, N) {
    return (pos + k) % N;
}

function rotateK (arr, k) {
    var N = arr.length;
    if (k % N == 0)  // k is multiple of N
	return;
    var newPositions = {};

    for(var i=0; i<arr.length; i++) {
	newPositions[getNewPosition(i, k, N)] = arr[i];
    }

    console.dir(newPositions);
    var newArray = [];
    for (var i=0; i<arr.length; i++) {
	newArray[i] = newPositions[i];
    }
    return newArray;
}

console.log("Hello");
arr2 = rotateK(arr, k);
console.dir(arr);
console.dir(arr2);
console.log("END")
