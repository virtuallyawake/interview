/*
Given a non-empty array of integers, return up to k most frequent elements, in the order of frequency desc.

For example,

Given [1,1,1,2,2,3] and k = 2, return [1,2].
Given [1,1,1,1] and k = 1 return [1].
Given [1,2,3,2,3] and k = 2 return [2,3].
Given [1,2,3,4] and k = 2 return [1,2].

{ 1: 4,
  2: 2,
  3: 1 }
  
  arrFrequencies = [[4,1], [2,2], [1,3]]
  
*/

function kMostFrequent(arr, k) {
    var fTable = {};
    for (var i=0; i<arr.length; i++) {
  	if (arr[i] in fTable) {
    	    fTable[arr[i]] += 1;
	} else {
    	    fTable[arr[i]] = 1;
	}
    }
    
    // 1. Sort by freq. Bad: O(n log(n))
    var keys = Object.keys(fTable);
    var arrFrequencies = keys.map(function (key) {
  	return [fTable[key], key];
    });
    
    arrFrequencies.sort(function(item1, item2) {
  	return item2[0] - item1[0];
    });
    
    return arrFrequencies.slice(0, k).map(function(item) {
  	return item[1];
    });
    
    // minHeap. O(n log(k))
    // Assuming that Heap data structure exists
    var minHeap = new Heap(function(item1, item2) {
  	return item1[0] - item2[0];
    });
    
    arrFrequencies.forEach(function(item) {
  	if (minHeap.length < k) {
    	    minHeap.push(item);
	} else {
    	    if (minHeap.top()[0] < item[0]) {
      		minHeap.pop();
		minHeap.push(item);
	    }
	}
    });
    
    var result = [];
    for (var i=0; i<minHeap.length; i++) {
  	result.push(minHeap.pop()[1]);
    }
    
    return result.reverse();
    // or add at the beginning of array with unshift
}

var arr = [1,2,3,4];
console.log(kMostFrequent(arr, 3));


// 3. Go through fTable k times and find max each time. O(n k)
// 4. Solution 3, Bucket Sort, O(n)
// Use an array to save numbers into different bucket whose index is the frequency:
