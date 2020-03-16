/*Let's recall from math the definition of dot product. (This is not part of the interview, but it's good to have the candidate say it if they know it: given two vectors a and b, the dot product is a1*b1 + a2*b2 + ... + aN*bN) This is a simple algorithm, but what makes it interesting is application to sparse vectors. A sparse vector is a vector with most elements equal to zero - imagine a vector with millions of elements (or even infinite, as is the case for e.g. the Fourier Transform), but only ten thousand or so are nonzero. Now, a machine learning application loads many such vectors in memory (from a file or a database) and computes many such dot products.

The question is twofold. First, what is a good storage strategy for sparse vectors such that we get fast dot product? We are looking for something compact that optimizes for dot product but not any other operation (e.g. we don't care for insertion or removal). Second, implement the dot product function. 


a = [a1, a2, ... , aN]
b = [b1, b2, ..., bN]
dotProduct = a1*b1 + a2*b2 + ... + aN*bN

A = {
	0: a1,
  10: a10,
  100, a100
}

B = {
	0: b1,
  20: b10,
  100, b100
}


*/

// 1. With hashtables
function dotProduct1(a, b) {
	// transform vectors to tables
	var A = getTable(a);
	var B = getTable(b);
	var result = 0;
  
	var keysA = Object.keys(A);
  keysA.forEach(function(keyA) {
  	if (keyA in B) {
  		result += A[keyA]*B[keyA];  	
    }
  });
  
  return result;
}

// 2. with array of pairs
// A = [[0, 1], [1, 3], [4, 1]]
// B = [[0, 1], [2, 1], [4, 7], [5, 3]]
function dotProduct2(a, b) {
    var A = getPairs(a);
    var B = getPairs(b);
    var pA = 0;
    var pB = 0;
    var result = 0;
    
    while(pA < A.length && pB < B.length) {
  	if (A[pA][0] === B[pB][0]) {
  	    result += A[pA][1]*B[pB][1];
	    pA++;
	    pB++;
	    continue;
	}
	if (A[pA][0] < B[pB][0]) {
    	    pA++;
	} else {
    	    pB++;
	}
    }
    
    return result;
}

function getPairs(v) {
    var result = [];
    v.forEach(function(el, index) {
  	if (el !== 0) {
    	    result.push([index, el]);
	}
    }); 
    
    return result;
}

function getTable(v) {
    var T = {};
    v.forEach(function(el, index) {
  	if (el !== 0) {
    	    T[index] = el;
	}
    })
    
    return T;
}

var a = [0, 3, 0, 0, 1, 1];
var b = [1, 0, 1, 0, 7, 3];

console.log(dotProduct2(a, b));
