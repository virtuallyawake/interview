/*
[
[150, 60], 
[148, 55], 
[170, 61], 
[189, 55], 
[165, 62], 
[190, 90]
]

[
[148, 55],      1
[150, 60],      2
[165, 62],      3
[170, 61],
[189, 55],
[190, 90]
]
*/

var arr = [
[150, 60], 
[148, 55], 
[170, 61], 
[189, 55], 
[165, 62], 
[190, 90]
];

function longestIncreasingSequence(arr) {
    // Sort on 1st element.
    arr.sort(function(a, b) {
        return a[0] - b[0];
    });

    var sequences = [];
    // Iterate for each 2nd element and find longest increasing sequence.
    for(var i=0; i<arr.length; i++) {
        var item = arr[i];
        var seq = [];
        for(var j=i; j<arr.length; j++) {
            if (i==j) {
                seq.push(item);
            } else {
                if (arr[j][1] >= arr[j-1][1])
                    seq.push(arr[j]);
                else
                    break;
            }   
        }
        sequences.push(seq);
    }
    sequences.sort(function(a, b) {
        return b.length - a.length;
    });
    
    return sequences[0];
}

var seq = longestIncreasingSequence(arr);
console.dir(seq);
console.log("Length = " + seq.length);
