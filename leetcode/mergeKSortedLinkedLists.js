/*
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

function getSmallest(lists) {
    var smallest = new ListNode(10000000);
    var smallerFound = false;
    var index = -1;
    for (var i=0; i<lists.length; i++) {
        if (lists[i] !== null) {
            if (lists[i].val < smallest.val) {
                smallest = lists[i];  
                smallerFound = true;
                index = i;
            }
        }
    }
    if (smallerFound) {
        lists[index] = lists[index].next;
        return smallest;
    }
    return null;
}
var mergeKLists = function(lists) {
    var head = getSmallest(lists);
    var tail = head;
    var smallest = head;
    while (smallest !== null) {
        var smallest = getSmallest(lists);
        if (smallest !== null) {
            tail.next = smallest;
            tail = smallest;
        }
    }
    return head;
};
