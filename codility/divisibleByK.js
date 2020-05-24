/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    // find the first number divisible by K
    let first = null
    for (let i=A; i<=B; i++) {
        if (i % K === 0) {
            first = i;
            break;
        };
    }
    
    // do not use !first ever. It will return true for first=0. Compare to null instead
    if (first === null) {
        return 0;
    }
    
    // Now that I found the first number divisible by K,
    // I can find the multiples of K within the range

    let end = B-first;  // range [0, B-first]    
    return 1 + Math.floor(end / K);  // counting 0 as a multiple
}
