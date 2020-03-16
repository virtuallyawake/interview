/*
Intersection of two sorted arrays of intervals

interval1:    ---------------
interval2:          ------
startInt = max(start1, start2)
endInt = min(end1, end2)
Intersection exists if startInt < endInt
*/

function getIntersection(el1, el2) {
    var start = Math.max(el1[0], el2[0]);
    var end = Math.min(el1[1], el2[1]);
    if (start < end) {
  	return [start, end];
    } else {
  	return null;
    }
}

function findIntersection(a1, a2) {
    var p1 = 0;
    var p2 = 0;
    var result = [];
    while (p1 < a1.length && p2 < a2.length) {
  	var el1 = a1[p1];
	var el2 = a2[p2];
	var intersection = getIntersection(el1, el2);
	if (intersection !== null) {
    	    result.push(intersection);
	} 
	if (el1[1] < el2[1]) {
	    p1++;
	} else {
	    p2++;
	}
    }
    
    return result;
}
//  el1    | el1      | result
//  [7,10]    [9,12]     [[1,2], [3,4], [7,8], [9,10]
