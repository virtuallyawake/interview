/*
Given an even number ( greater than 2 ), return two prime numbers whose sum will be equal to given number.

NOTE A solution will always exist. read Goldbach’s conjecture

Example:


Input : 4
Output: 2 + 2 = 4

If there are more than one solutions possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b,
and [c,d] is another solution with c <= d, then

[a, b] < [c, d] 

If a < c OR a==c AND b < d. 
*/

function isPrime(n) {
    if (n == 1)
        return false;
    if (n == 2)
        return true;
    if (n == 3)
        return true;
    if (n % 2 === 0)
        return false;
    var sqrRoot = Math.floor(Math.sqrt(n));
    for (var i = 5; i <= sqrRoot; i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}
    
module.exports = { 
 
  //param A : integer
  //return a array of integers
  primesum : function(A){
        // Generate a table of primes smaller than A
        var primes = {};
        for (var i = 1; i < A; i++) {
            if (isPrime(i)) {
                primes[i] = 1;
            }
        }
        // Find primes that add up to A
        var solutions = [];
        var primesArray = Object.keys(primes);
        for (var i=0; i<primesArray.length; i++) {
            var prime = primesArray[i];
            var complement = A - prime;
            if (primes[complement]) {
                solutions.push([prime, complement]);
            }
        }
        // Return smallest solution
        var smallest = solutions[0];
        if (solutions.length === 1)
            return smallest;
        for (var i=1; i < solutions.length; i++) {
            if (solutions[i][0] < smallest[0]) {
                smallest = solutions[i];
                continue;
            }
            if ((solutions[i][0] == smallest[0]) && (solution[i][1] < smallest[1])) {
                smallest = solutions[i];
            }
        }
        return smallest;
    }
};
