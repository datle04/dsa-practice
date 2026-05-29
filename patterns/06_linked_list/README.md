# 06 — Linked List

## When to Use

- Reverse, merge, or reorder a linked list
- Detect cycle or find a specific position (middle, nth from end)
- In-place modification without extra space
- Problems that say "do not use extra memory"

## Template

```typescript
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// Reverse a linked list
function reverse(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Dummy head — simplifies edge cases (empty list, insert at head)
const dummy = new ListNode(0, head);
// ... operate on dummy.next
return dummy.next;
```

## Problems

### Easy

| # | Problem | Skill | Status | Date |
|---|---------|-------|--------|------|
| 1 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | Reverse |✅| 26/05/2026 |
| 2 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Merge |✅| 26/05/2026 |
| 3 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | Fast/Slow + Reverse |✅| 26/05/2026 |
| 4 | [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | Traverse + Dummy |✅| 27/05/2026 |

### Medium

| # | Problem | Skill | Status | Date |
|---|---------|-------|--------|------|
| 5 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Traverse + Carry |✅| 27/05/2026 |
| 6 | [Remove Nth Node From End](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Fast/Slow |✅| 29/0/2026 |
| 7 | [Reorder List](https://leetcode.com/problems/reorder-list/) | Fast/Slow + Reverse + Merge | | |
| 8 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | HashMap | | |

## Hints

<details><summary>Reverse Linked List</summary>3 pointers: prev, curr, next. Each step: save next, point curr back to prev, advance both.</details>
<details><summary>Merge Two Sorted Lists</summary>Use dummy head. Compare heads of both lists, append smaller one. Don't forget the remaining tail.</details>
<details><summary>Palindrome Linked List</summary>Find middle with fast/slow, reverse second half, compare with first half.</details>
<details><summary>Remove Linked List Elements</summary>Use dummy head to handle removing the first node. Traverse: if next.val === val, skip it.</details>
<details><summary>Add Two Numbers</summary>Traverse both lists together, sum digits + carry. Don't forget the final carry.</details>
<details><summary>Remove Nth Node From End</summary>Fast moves n steps ahead, then both move together. When fast hits null, slow is at the node before target. Use dummy head.</details>
<details><summary>Reorder List</summary>3 steps: find middle (fast/slow), reverse second half, merge alternating.</details>
<details><summary>Copy List with Random Pointer</summary>First pass: clone nodes, store old→new mapping in HashMap. Second pass: set next and random pointers using the map.</details>

## Lessons Learned

-
