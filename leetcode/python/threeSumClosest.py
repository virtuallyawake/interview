class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        shortest = 10000;
        nums.sort();
        n = len(nums);
        for i in range(n):
            j = i+1;
            k = n-1;
            while j<k:
                sum = nums[i] + nums[j] + nums[k];
                diff = abs(target - sum);
                if diff < shortest:
                    shortest = diff;
                    winner = sum;
                if sum < target:
                    j = j + 1;
                if sum > target:
                    k = k - 1;
                if sum == target:
                    break;
         
        return winner;
