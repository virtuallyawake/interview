/*
Problem: Given a sequence of nonnegative integers A and an integer T, return whether there is a *continuous sequence* of A that sums up to exactly T
Example [23, 5, 4, 7, 2, 11], 20. Return True because 7 + 2 + 11 = 20
[1, 3, 5, 23, 2], 8. Return True because 3 + 5 = 8
[1, 3, 5, 23, 2], 7 Return False because no sequence in this array adds up to 7
Note: We are looking for an O(N) solution. There is an obvious O(N^2) solution which is a good starting point but is not the final solution we are looking for.
• Ensure you see candidate screen so they are not researching online
• Be confident that all the information the candidate needs is in the question. Things like "positive integers" "continuous sequence" are important details
• 20 minutes, but can give a few extra if the candidate needs it
• Structured approach, clean, compilable code, as simple as possible


A = [23, 5, 4, 7, 2, 11]
T = 20
*/


function findSequence(A, T) {
    var left = 0;
    var right = 0;
    var sum = A[0];
    
    while (right < A.length) {
	if (sum === T) {
      	    return true;
	}
	if (sum < T) {
	    right++;
	    if (right === A.length) {
      		console.log("Exit")
      		return false;
	    }
     	    sum += A[right];
	}
	if (sum > T) {
      	    sum -= A[left];
            left++;
            if (right < left) {
        	right = left;
		sum += A[right];
            }
	}
    }
    
    return false;
}

var A = [23, 5, 4, 7, 2, 11];
var T = 20;

console.log(findSequence(A, T));
