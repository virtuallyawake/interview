# Generate unique permutations when the input can have duplicate elements

class Solution(object):
    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        uniqueSolutions = set();
        N = len(nums);
        def generatePermutations(options, arr=[]):
            if len(arr) == N:
                uniqueSolutions.add(tuple(arr));
            
            for i in xrange(len(options)):
                # new options removes element at i
                # new arr adds options[i]
                generatePermutations(options[0:i] + options[i+1:N], arr + [options[i]]);
        
        generatePermutations(nums);
        
        return uniqueSolutions;
