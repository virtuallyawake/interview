class Solution(object):
    
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """

        nums.sort();
        solutions = set();
        for i in range(len(nums)):
            a = nums[i];
            left = i+1;
            right = len(nums)-1;
            target = -a; # b+c = -a
            
            while left < right:
                b = nums[left];
                c = nums[right];
                sum = b + c;
                if sum == target:
                    solutions.add((a,b,c));
                if sum < target:
                    left = left + 1;
                else:
                    right = right - 1;
            
        l = [list(row) for row in solutions];
        return l;
