/*
23. Merge k Sorted Lists

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var head = new ListNode(0); // fake head
    var p = head;
    
    while (true) {
        var smallest = new ListNode(100000000000000);
        var listIndex = -1;
        for (var i=0; i<lists.length; i++) {
            if (lists[i] !==  null && lists[i].val < smallest.val) {
                smallest = lists[i];
                listIndex = i;
            }
        }
        
        if (listIndex === -1) {
            break;  // no more items to add
        }

        p.next = smallest;
        p = p.next;
        lists[listIndex] = lists[listIndex].next;
    }
    
    return head.next;
};
