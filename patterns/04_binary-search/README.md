# 04 — Binary Search

## When to Use

- Sorted array or monotonic property
- Problem requires O(log n)
- Find min/max satisfying a condition (binary search on answer)
- "Rotated sorted array"

## Template

```typescript
// Standard: find exact match
let left = 0;
let right = arr.length - 1;
while (left <= right) {
  const mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}

// Boundary: find leftmost position satisfying a condition
let lo = 0;
let hi = n;
while (lo < hi) {
  const mid = lo + Math.floor((hi - lo) / 2);
  if (condition(mid)) hi = mid;   // mid could be the answer
  else lo = mid + 1;              // mid is definitely not
}
// lo === hi === answer
```

⚠️ `left <= right` vs `left < right` — wrong choice causes infinite loop!

## Problems

### Easy

| # | Problem | Variant | Status | Date |
|---|---------|---------|--------|------|
| 1 | [Binary Search](https://leetcode.com/problems/binary-search/) | Standard |✅| 11/05/2026 |
| 2 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | Boundary |✅| 11/05/2026 |
| 3 | [First Bad Version](https://leetcode.com/problems/first-bad-version/) | Boundary |✅| 12/05/2026 |
| 4 | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | On answer |✅| 12/05/2026 |

### Medium

| # | Problem | Variant | Status | Date |
|---|---------|---------|--------|------|
| 5 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Standard |✅| 13/05/2026 |
| 6 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Variant |✅|13/05/2026|
| 7 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Variant |✅|14/05/2026|
| 8 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | On answer |✅| 14/05/2026 |

### Hard

| # | Problem | Variant | Status | Date |
|---|---------|---------|--------|------|
| 9 | [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) | Standard |✅| 15/05/2026 |

## Hints

<details><summary>Binary Search</summary>Standard template. Compare mid with target, adjust left or right.</details>
<details><summary>Search Insert Position</summary>Find the leftmost index where arr[i] >= target. Use boundary template.</details>
<details><summary>First Bad Version</summary>Boundary search — find the first version where isBadVersion(mid) is true.</details>
<details><summary>Sqrt(x)</summary>Find the largest n where n * n <= x. Binary search on [1, x].</details>
<details><summary>Search a 2D Matrix</summary>Treat the 2D matrix as a flat sorted array. Index i maps to row = Math.floor(i / cols), col = i % cols.</details>
<details><summary>Find Minimum in Rotated Sorted Array</summary>Compare mid with right. If arr[mid] > arr[right] → min is in right half. Otherwise left half.</details>
<details><summary>Search in Rotated Sorted Array</summary>Determine which half is sorted (compare mid with left). Check if target falls in the sorted half.</details>
<details><summary>Koko Eating Bananas</summary>Binary search on speed k ∈ [1, max(piles)]. For each k, compute total hours = sum of ceil(pile / k).</details>
<details><summary>Find Minimum in Rotated Sorted Array II</summary>Compare mid with right. If arr[mid] > arr[right] → min is in right half. If arr[mid] < arr[right] → min is in left half. Create a new branch to handle arr[mid] === arr[right] | arr[left] case.</details>
