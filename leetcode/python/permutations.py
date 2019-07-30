class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        solutions = [];
        N = len(nums);

        def generatePermutations(options, arr=[]):
            if len(arr) == N:
                return solutions.append(list(arr));

            for i in xrange(len(options)):
                tmpArr = list(arr);
                tmpOptions = list(options)
                tmpArr.append(tmpOptions[i]);
                del tmpOptions[i];
                generatePermutations(tmpOptions, tmpArr);

        generatePermutations(nums);
        return solutions;
