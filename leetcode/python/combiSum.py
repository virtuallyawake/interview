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
