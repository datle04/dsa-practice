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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;
    while(tail.next){
        tail = tail.next;
        length++;
    } 

    k = k % length;
    if(k === 0) return head;

    let slow = head;

    for(let i = 1; i < length - k; i++){
        slow = slow.next;
    }
    
    let res = slow.next;

    tail.next = head;
    slow.next = null;

    return res;
};