# 02 — Two Pointers

## When to Use

- Sorted array and need to find pairs satisfying a condition
- Compare/process from both ends toward the middle (palindrome, container)
- Remove duplicates or move elements in-place
- Detect cycle or find middle in linked list

## Template

```typescript
// Opposite direction: left and right move inward
let left = 0;
let right = arr.length - 1;
while (left < right) {
  if (someCondition) left++;
  else right--;
}

// Same direction: slow/fast
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (shouldKeep(arr[fast])) {
    arr[slow] = arr[fast];
    slow++;
  }
}
```

## Problems

### Easy

| # | Problem | Variant | Status | Date |
|---|---------|---------|--------|------|
| 1 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Opposite |✅| 01/05/2026 |
| 2 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Same dir |✅| 01/05/2026|
| 3 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | Same dir |✅| 01/05/2026 |
| 4 | [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) | Opposite | | |
| 5 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Fast & Slow | | |
| 6 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Fast & Slow | | |

### Medium

| # | Problem | Variant | Status | Date |
|---|---------|---------|--------|------|
| 7 | [Two Sum II - Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Opposite | | |
| 8 | [3Sum](https://leetcode.com/problems/3sum/) | Opposite | | |
| 9 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Opposite | | |

### Hard

| # | Problem | Variant | Status | Date |
|---|---------|---------|--------|------|
| 10 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Opposite | | |

## Hints

<details><summary>Valid Palindrome</summary>left and right move inward, skip non-alphanumeric, compare lowercase.</details>
<details><summary>Remove Duplicates</summary>slow marks the position of last unique element. If arr[fast] !== arr[slow], advance slow and copy.</details>
<details><summary>Move Zeroes</summary>slow points to where the next non-zero should go, fast scans the array.</details>
<details><summary>Squares of a Sorted Array</summary>Largest squares are at the two ends (negatives on left). Compare abs values, fill result from the end.</details>
<details><summary>Linked List Cycle</summary>Fast moves 2 steps, slow moves 1. If they meet → cycle exists.</details>
<details><summary>Two Sum II</summary>Sorted → if sum > target, right--. If sum < target, left++.</details>
<details><summary>3Sum</summary>Sort array. Fix element i, use two pointers on the rest. Skip duplicates.</details>
<details><summary>Container With Most Water</summary>Always move the pointer with shorter height — keeping it can only give smaller area.</details>
<details><summary>Trapping Rain Water</summary>Water at i = min(maxLeft, maxRight) - height[i]. Track max from both sides.</details>

## Lessons Learned

-