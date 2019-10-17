/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort based on start of interval
    intervals.sort(function (a, b) {
        return a[0] - b[0];
    });
    
    if (intervals.length == 0)
        return [];
    
    var output = [];
    [start, end] = intervals[0];
    
    for (var i=1; i<intervals.length; i++) {
        if (end >= intervals[i][0]) {
            end = Math.max(end, intervals[i][1]);
        } else {
            output.push([start, end]);
            [start, end] = intervals[i];
        }
    }
    
    output.push([start, end]);
    
    return output;
};
