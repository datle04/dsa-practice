/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummy = new ListNode(0, head);
    let curr: ListNode = head;
    let prev: ListNode = dummy;

    while(curr){
        if(curr.val === val){
            prev.next = curr.next;
            curr.next = null;
            curr = prev.next;
        } else {
            curr = curr.next;
            prev = prev.next;
        }
    }

    return dummy.next;
};