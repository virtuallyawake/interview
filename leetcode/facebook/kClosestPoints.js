/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
 */

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

function getDistance(point) {
    return Math.sqrt(point[0]**2 + point[1]**2);
}

var kClosest1 = function(points, K) {
    points.sort(function(p1, p2) {
        return getDistance(p1) - getDistance(p2);
    });
    
    return points.slice(0, K);
};

// use quickSelect to pivot around Kth element
var kClosest = function(points, K) {
    var elementK = quickSelect(points, 0, points.length-1, K);
    return points.slice(0, K);
}

function partition(arr, left, right) {
    var pivot = arr[left];
    var p1 = left + 1;   // everything to its left is < pivot
    
    for (var i=p1; i<=right; i++) {
        if (getDistance(arr[i]) < getDistance(pivot)) {
            swap(arr, i, p1);
            p1++;
        }
    }
    
    p1--;
    swap(arr, p1, left);
    return p1;
}

function swap(arr, p1, p2) {
    var tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
}

function quickSelect(arr, left, right, K) {
    var pivotIndex = partition(arr, left, right);
    
    if (pivotIndex === K) {
        return arr[K];
    }
    
    if (K < pivotIndex) {
        return quickSelect(arr, left, pivotIndex-1, K);
    } else {
        return quickSelect(arr, pivotIndex+1, right, K);
    }
}

// Solution with max heap
// Max-heap
vector<Point> find_closest(const vector<Point>& v, int k) {
  if (k <= 0) {
    return vector<Point>();
  }
  vector<Point> closest;
  Heap<Point> heap(closest, Point::closer); // max heap
  for (const auto& pt : v) {
    if (heap.size() < k) {
      heap.push(pt);
    } else if (pt.dist() < heap.top().dist()) {
      heap.pop();
      heap.push(pt);
    }
  }
  return closest;
}
