/*
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example,
Given:

s1 = "aabcc",
s2 = "dbbca",
When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
*/

module.exports = { 
  //param A : string
  //param B : string
  //param C : string
  //return an integer
  isInterleave : function(A, B, C){
        var posA = 0;
        var posB = 0;
        for (var i=0; i<C.length; i++) {
            var charC = C.charAt(i);
            if (charC == A.charAt(posA)) {
                posA++;
                continue;
            }
            if (charC == B.charAt(posB)) {
                posB++;
                continue;
            }
            return 0;
        }
        return 1;
    }
};
