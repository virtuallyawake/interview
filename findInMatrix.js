/*
MxN
1 2 4 6 7 8 9
2 3
3 4
6 5
8
*/

function findX(matrix, x) {
    var row = 0;
    var col = matrix[0].length-1;
    while(col > 0 && row < matrix.length) {
        if (matrix[row][col] === x) {
            return console.log(row + ", " + col);
        }
        if (matrix[row][col] < x)
            row++;
        else 
            col--;
    }
    return console.log("Not found");
}

var matrix = [];
matrix.push([1, 2, 4, 6, 9]);
matrix.push([1, 3, 5, 7, 12]);
matrix.push([2, 6, 8, 11, 18]);
matrix.push([5, 7, 9, 15, 21]);

var x = 20;

findX(matrix, x);
