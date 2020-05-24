/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

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
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    
    if (l2 === null) {
        return l1;
    }
    
    var h3 = null
    
    if (l1.val < l2.val) {
        h3 = l1;
        l1 = l1.next;
    } else {
        h3 = l2;
        l2 = l2.next;
    }

    var l3 = h3; 

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }

        l3 = l3.next;
    }
    
    // Append remaining non-null list to l3
    if (l1 === null) {
        l3.next = l2;
    } else {
        l3.next = l1;
    }
    
    return h3;
};
