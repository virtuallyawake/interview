class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        
        def swap(left, right):
            tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
        
        def partition(nums, start, end):
            pivot = nums[start];
            p1 = start+1;
            for i in range(p1, end+1):
                if nums[i] < pivot:
                    swap(p1, i);
                    p1 += 1;
            p1 -= 1;
            swap(start, p1);
            return p1;
            
        def sortAscending(nums, start, end):
            if start == end:
                return;
            p = partition(nums, start, end);
            if start < p:
                sortAscending(nums, start, p-1);
            if p < end:
                sortAscending(nums, p+1, end);
            
        # from right to left, find decreasing digit
        N = len(nums);
        for i in reversed(range(N)):
            if i == 0:
                break;
            a = nums[i-1];
            b = nums[i];
            if a < b:
                # swap a with the next larger number
                # on the right subarray
                for j in reversed(range(N)):
                    if nums[j] > a:
                        swap(i-1, j);
                        sortAscending(nums, i, N-1);
                        return nums;
            
        return nums.reverse();
