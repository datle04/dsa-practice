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

function isPalindrome(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;

    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let left = head;
    let right = prev;

    while(left && right){
        if(left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
};