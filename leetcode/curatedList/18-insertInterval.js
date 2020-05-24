/*
57. Insert Interval

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

/*
We know how to merge overlapping intervals
=> We insert the new interval first, and then merge overlapping intervals
*/

var insert = function(intervals, newInterval) {
    // insert new interval
    var inserted = false;
    for (var i=0; i<intervals.length; i++) {
        if (intervals[i][0] >= newInterval[0]) {
            // insert newInterval before intervals[i]
            intervals.splice(i, 0, newInterval);
            inserted = true;
            break;
        }
    }
    
    if (!inserted) {
        intervals.push(newInterval);
    }
    
    // merge intervals
    var results = [];
    [start, end] = intervals[0];
    
    for (var i=1; i<intervals.length; i++) {
        var currInterval = intervals[i];
        if (currInterval[0] <= end) {
            end = Math.max(currInterval[1], end);
        } else {
            results.push([start, end]);
            [start, end] = currInterval;
        }
    }
    
    results.push([start, end]);
    return results;
};
