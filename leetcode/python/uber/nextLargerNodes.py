"""
We are given a linked list with head as the first node.  Let's number the nodes in the list: node_1, node_2, node_3, ... etc.

Each node may have a next larger value: for node_i, next_larger(node_i) is the node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest possible choice.  If such a j does not exist, the next larger value is 0.

Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).

Note that in the example inputs (not outputs) below, arrays such as [2,1,5] represent the serialization of a linked list with a head node value of 2, second node value of 1, and third node value of 5.

 

Example 1:

Input: [2,1,5]
Output: [5,5,0]

Example 2:

Input: [2,7,4,3,5]
Output: [7,0,5,5,0]
Example 3:

Input: [1,7,5,1,9,2,5,1]
Output: [7,9,9,9,0,5,0,0]
"""

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
        
    def nextLargerNodes(self, head):
        """
        :type head: ListNode
        :rtype: List[int]
        """
        def getNextLarger(n):
            p2 = n;
            while p2 != None:
                if p2.val > n.val:
                    return p2.val;
                p2 = p2.next;
            return 0;
        
        result = [];
        curr = head;
        prevNextLarger = -10000;
        prevVal = -10000;
        while curr != None:
            if prevVal == curr.val:
                currNextLarger = prevNextLarger;
            else:
                currNextLarger = getNextLarger(curr);
                result.append(currNextLarger);
        
            curr = curr.next;
            
        return result;
