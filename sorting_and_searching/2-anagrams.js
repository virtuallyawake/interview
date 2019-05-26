/*
Input: array of strings, which include anagrams
['dog', 'cat', 'daniela', 'god', 'act', 'peter']

Output: all anagrams next to each other.
['dog', 'god', 'daniela', 'cat', 'act', 'peter']

['d', 'o', 'g'] = ['d', 'g', 'o'] -> 'dgo'
['g', 'o', 'd'] = ['d', 'g', 'o'] -> 'dgo'
*/

var array = ['dog', 'cat', 'daniela', 'god', 'act', 'peter']

function mergesort(A, left, right) {
  if (left === right) {
    return A[left];
  }

  var numElems = right-left+1;
  var midPoint = left + Math.floor((right-left+1)/2);
  var B = mergesort(A, left, midPoint-1);
  var C = mergesort(A, midPoint, right);

  // Merge left half and right half
  var result = [];
  var pB = 0;
  var pC = 0;
  for (var k=0; k < numElems; k++) {
    if (B[pB] && C[pC]) {
      if (B[pB] < C[pC]) {
	result.push(B[pB]);
	pB++;
      } else {
	result.push(C[pC]);
	pC++;
      }
    } else {
      if (B[pB]) {
	result.push(B[pB]);
	pB++;
      } else {
	result.push(C[pC])
	pC++;
      }
    }
  }

  return result;
}

function getSortedString(str) {
  var strArray = str.split('');
  return mergesort(strArray, 0, strArray.length-1).join('');
}

function rearrangeArray(array) {
  var buckets = {};
  array.forEach(function (elem) {
    var key = getSortedString(elem);
    if (!buckets[key]) {
      buckets[key] = [elem];
    } else {
      buckets[key].push(elem);
    }
  });

  var result = [];
  Object.keys(buckets).forEach(function(key) {
    var values = buckets[key];
    values.forEach(function (elem) {
      result.push(elem);
    });
  });

  return result;
}

console.log(rearrangeArray(array))
