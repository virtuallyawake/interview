/* 
https://our.internmc.facebook.com/intern/wiki/Engineering/Interviewing/Ninja/Sorted_Iterator_over_K_Sorted_Lists
Given K sorted lists of up to N elements in each list, return a sorted iterator over all the items.
Important notes:
K denotes the number of lists.
N denotes the length of the longest list.
You may assume K << N
There aren't necessarily N items in each list, but there could be.
Items are not unique, if an item appears X times (in a single list or in several lists), we would expect the iterator to return the item X consecutive times.

Receiving the following lists:
1: [1, 4, 5, 8, 9]
2: [3, 4, 4, 6]
3: [0, 2, 8]
Would yield the following result:
[0, 1, 2, 3, 4, 4, 4, 5, 6, 8, 8, 9]
*/

var lists = [[1, 4, 5, 8, 9], [3, 4, 4, 6], [0, 2, 8]];

var ListIterator = function(lists) {
    function mergeTwoLists(A, B) {
	resultMerge = [];
	var pA = 0;
	var pB = 0;
	while (A.length > 0 && B.length > 0) {
    	    if (A[0] < B[0]) {
		resultMerge.push(A.shift());  // pop 1st element
	    } else {
      		resultMerge.push(B.shift())
	    }
	}
	
	return (A.length > 0) ? resultMerge.concat(A) : resultMerge.concat(B);
    }
    
    var resultList = lists[0];
    for (var i=1; i < lists.length; i++) {
	resultList = mergeTwoLists(resultList, lists[i]);
    }

    var position = 0;
    this.next = function() {
  	if (position < resultList.length) {
  	    return resultList[position++];
	} 
	return null;
    }
    this.hasNext = function() {
  	return (position < resultList.length) ? true : false;
    }
}

var iterator = new ListIterator(lists);

while (iterator.hasNext()) {
    var next = iterator.next();
    console.log(next);
}


// Java solution with indices
class SortedIterator implements Iterator<Integer> {
  public SortedIterator(List<List<Integer>> lists) {
    this.lists = lists;
    indices = new int[lists.size()];
    for (int i = 0; i < indices.length; ++i) {
      indices[i] = 0;
    }
  }

  public boolean hasNext() {
    for (int i = 0; i < lists.size(); ++i) {
      if (indices[i] < lists.get(i).size()) {
        return true;
      }
    }
    return false;
  }

  public Integer next() {
    if (!hasNext()) {
      throw new NoSuchElementException("No more elements...");
    }
    int min = Integer.MAX_VALUE;
    int min_index = -1;
    for (int i = 0; i < lists.size(); ++i) {
      int index = indices[i];
      if (index < lists.get(i).size() && min >= lists.get(i).get(index)) {
        min_index = i;
        min = lists.get(i).get(index);
      }
    }
    indices[min_index]++;
    return min;
  }

  private int[] indices;
  private List<List<Integer>> lists;
}

/*
Construction Runtime: O(K)
Next's Runtime: O(K)
Space: O(K)
*
