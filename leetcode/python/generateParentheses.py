class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """        
        def isValid(p):
            counter = 0;
            arr = list(p);
            if arr[0] == ')':
                return False;

            for i in range(len(arr)):
                if arr[i] == '(':
                    counter = counter + 1;
                else:
                    counter = counter - 1;
                if counter < 0:
                    return False;
            return counter == 0;

        # traverse binary tree of height 2n and check if string
        # represented by the path is valid

        all = [];
        
        def generateStrings(S, level):
            if level == 2*n:
                if isValid(S) == True:
                    all.append(S);
                return;
            
            generateStrings(S + '(', level+1);
            generateStrings(S + ')', level+1);
        
        def generateStringsTwo(S, level, left, right):
            if level == 2*n:
                arr = list(S);
                all.append(S);
                return;
            if left < n:
                generateStringsTwo(S + '(', level+1, left+1, right);
            if right < left:
                generateStringsTwo(S + ')', level+1, left, right+1);

        
        #generateStrings('(', 1);
        generateStringsTwo('(', 1, 1, 0);
        
        return all;
