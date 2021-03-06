"""
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
"""

class Solution(object):
    def combinationSum2(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        N = len(candidates);
        sol = set();
        
        def combiSum(i=0, acc=0, tmp=[]): 
           # print(i, acc, tmp)
            if acc == target:
                tmp2 = list(tmp);
                tmp2.sort()
            #    print(tmp2);
                sol.add(tuple(tmp2));
                return;
            if acc > target:
                return;
            if i == N:
                return;
            
            for j in xrange(i, N):
                tmp.append(candidates[j]);
                acc = acc + candidates[j];
                combiSum(j+1, acc, tmp);
                tmp.pop();
                acc = acc - candidates[j];

        combiSum();
        return sol;
