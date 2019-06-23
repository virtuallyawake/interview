class Solution(object):    
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        nums.sort();
        solutions = set();
        for i in range(len(nums)):
            a = nums[i];
            for j in range(i+1, len(nums)):
                b = nums[j];
                # do we have c + d = target - a - b ?
                targetcd = target - a - b;
                left = j + 1;
                right = len(nums) - 1;
                while left < right:
                    c = nums[left];
                    d = nums[right];
                    sum = c + d;
                    if sum == targetcd:
                        solutions.add((a,b,c,d));
                    if sum < targetcd:
                        left = left + 1;
                    else:
                        right = right - 1;
                        
        return [list(tup) for tup in solutions];
