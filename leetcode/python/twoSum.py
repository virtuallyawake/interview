class Solution(object):

    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        # build hash table
        table = {};
        for i in range(len(nums)):
            if nums[i] in table:
                table[nums[i]].append(i);
            else:
                table[nums[i]] = [i];
        
        for num in nums:
            complement = target - num;
            if complement in table:
                if num == complement:
                    if len(table[num]) > 1:
                        return [table[num][0], table[num][1]]
                else:
                    return [table[num][0], table[complement][0]];
