/*
Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
1->2->3->4
0->1->2->3->4
p1 => n0
p2 => n2
p1.next.next = p2.next
p2.next = p1.next
p1.next = p2
0->1->3->4  // 2->3->4
2->1->3->4
0->2->1->3->4
*/
var swapPairs = function(head) {
    if (head === null)
        return null;
    if (head.next === null)
        return head;

    var dummy = new ListNode(0);
    dummy.next = head;
    var p1 = dummy;
    var p2 = head.next;
    var newHead = null;
    while (p2 !== null) {
        p1.next.next = p2.next;
        p2.next = p1.next;
        p1.next = p2;
        if (!newHead) {
            newHead = p1.next;
        }
        // Advance pointers
        p1 = p1.next.next;
        if (p2.next.next !== null)
            p2 = p2.next.next.next;
        else
            break;
    }
    return newHead;
};
