/*
Given an array A of integers and another non negative integer k, find if there exists 2 indices i and j such that A[i] - A[j] = k, i != j.
*/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
  diffPossible : function(A, B){
        var freq = {};
        A.forEach(function (elem) {
            if (!freq[elem]) 
                freq[elem] = 1;
            else
                freq[elem]++;
        });
        
        for (var i=0; i<A.length; i++) {
            var first = A[i];
            var second = first - B;
            
            if (B == 0) {
                if (freq[second] > 1)
                    return 1;
            } else {
                if (freq[second])
                    return 1;
            }
        }
        
        return 0;
    }
};
