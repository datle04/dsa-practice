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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let tail = dummy;
    let carry = 0;

    while(l1 || l2 || carry){
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = 0;
        if(sum >= 10){
            carry = Math.floor(sum / 10);
            tail.next = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum);
        }
        tail = tail.next;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return dummy.next;
};