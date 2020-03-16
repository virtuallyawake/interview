/*
Intersection of two sorted arrays of integers
a1 = [1,3,4,7,11,107]
a2 = [2,3,11,19]
intersection = [3,11]
*/

function findIntersection(a1, a2) {
    var p1 = 0;
    var p2 = 0;
    var result = [];
    while (p1 < a1.length && p2 < a2.length) {
  	if (a1[p1] === a2[p2]) {
    	    result.push(a1[p1]);
	    p1++;
	    p2++;
	    continue;
	}
	if (a1[p1] < a2[p2]) {
    	    p1++;
	} else {
    	    p2++;
	}
    }
    
    return result;
}

var a1 = [1,2,2,2,4];
var a2 = [0,2,2,5];

console.log(findIntersection(a1, a2))
