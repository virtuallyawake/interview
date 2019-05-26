int Solution::removeDuplicates(vector<int> &A) {
  // Do not write main() function.
  // Do not read input, instead use the arguments to the function.
  // Do not print the output, instead return values as specified
  // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
  int uniquePointer = 0;
  int runner;
  int length = A.size();
  for (runner = 1; runner < length; runner++) {
    int latestUnique = A[uniquePointer];
    int curr = A[runner];
    if (latestUnique != curr) {
      uniquePointer++;
      A[uniquePointer] = curr;
    }
  }
  return uniquePointer+1;
}
