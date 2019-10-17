"""
Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

"""

class Solution(object):
    def intervalIntersection(self, A, B):
        """
        :type A: List[List[int]]
        :type B: List[List[int]]
        :rtype: List[List[int]]
        """
        
        if len(A) == 0 or len(B) == 0:
            return [];
        
        def getIntersection(a, b):
            start = max(a[0], b[0]);
            end = min(a[1], b[1]);
            if end >= start:
                return [start, end];
            else:
                None;
        
        result = [];    
        i = 0;
        j = 0;

        while i < len(A) and j < len(B):
            intersection = getIntersection(A[i], B[j]);   
            if intersection:
                result.append(intersection);

            if A[i][1] < B[j][1]:
                i = i + 1;
            else:
                j = j + 1;

        return result;
