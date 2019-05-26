/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
function ListNode(val) {
   this.val = val;
   this.next = null;
}  
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var l3 = null;
    var t3 = null;
    var carry = 0;
    while (l1 !== null || l2 !== null || carry) {
        var val1 = l1 ? l1.val : 0;
        var val2 = l2 ? l2.val : 0;
        var sum = val1 + val2 + carry;
        carry = (sum > 9) ? 1 : 0;
        
        if (l3 === null) {
            l3 = new ListNode(sum % 10);
            t3 = l3;
        } else {
            t3.next = new ListNode(sum % 10);
            t3 = t3.next;
        }
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }
    
    return l3;
};
