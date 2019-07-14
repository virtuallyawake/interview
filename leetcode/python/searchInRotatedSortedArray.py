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
            
            mid = (end - start + 1)//2 + start;
            if nums[mid] == target:
                return mid;
            
            if start == end:
                return -1;
            
            # Left half
            if start < mid:
                lowerBoundLeft = min(nums[start], nums[mid-1]);
                upperBoundLeft = max(nums[start], nums[mid-1]);

                if ((nums[start] <= nums[mid-1] and target >= lowerBoundLeft and target <= upperBoundLeft) or (nums[start] > nums[mid-1] and (target <= lowerBoundLeft or target >= upperBoundLeft))):
                    return rotatedSearch(nums, start, mid-1, target);

            # Right half
            if end > mid:
                lowerBoundRight = min(nums[mid+1], nums[end]);
                upperBoundRight = max(nums[mid+1], nums[end]);

                if ((nums[mid+1] <= nums[end] and target >= lowerBoundRight and target <= upperBoundRight) or (nums[mid+1] > nums[end] and (target <= lowerBoundRight or target >= upperBoundRight))):
                    return rotatedSearch(nums, mid+1, end, target);
            
            return -1;
            
        return rotatedSearch(nums, 0, len(nums)-1, target);
