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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    let mid = slow.next;
    slow.next = null;

    let prev: ListNode | null = null;
    while(mid){
        const next = mid.next;
        mid.next = prev;
        prev = mid;
        mid = next;
    }

    let first = head;
    let second = prev;

    while(second){
        const temp1 = first.next;
        const temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};