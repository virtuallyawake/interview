function solution(A) {
    // Algorithm return the longest distance between two elements that are the same
    // We modify the existing algorithm to scan though i from left to right and j from right to
    // left. That way, the first result we find will maximize the distance betweem the elements i, j.
    // Also, there is no need for j to go below the value of i.
 
    var N = A.length;
    var result = 0;
    var i, j;
    for (i = 0; i < N; i++)
        for (j = N-1; j > i; j--)
            if (A[i] == A[j])
                return Math.abs(i - j);
    return result;
}
