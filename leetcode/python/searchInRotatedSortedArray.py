class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        def rotatedSearch(nums, start, end, target):
            if len(nums) == 0:
                return -1;
            if start > end:
                return -1;

            mid = (end - start + 1)//2 + start;
            if nums[mid] == target:
                return mid;
            
            if start == end:
                return -1;
            
            # Left half
            # Check if left half is ordered
            if nums[start] <= nums[mid-1]:
                if target <= nums[mid-1] and target >= nums[start]:
                    return rotatedSearch(nums, start, mid-1, target);
                else:
                    return rotatedSearch(nums, mid+1, end, target);
            else: # right half is ordered
                if target >= nums[mid+1] and target <= nums[end]:
                    return rotatedSearch(nums, mid+1, end, target);
                else:
                    return rotatedSearch(nums, start, mid-1, target);
                
        return rotatedSearch(nums, 0, len(nums)-1, target);
