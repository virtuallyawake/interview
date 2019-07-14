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

def swap(left, right):
    tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;

def quicksort(nums, start, end):
    if start == end:
        return;
    p = partition(nums, start, end);
    if start < p:
        quicksort(nums, start, p-1);
    if p < end:
        quicksort(nums, p+1, end);

nums = [5, 2, 1, 8, 4, 3, 6];
quicksort(nums, 0, len(nums)-1);
