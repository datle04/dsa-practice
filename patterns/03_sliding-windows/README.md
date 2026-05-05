# 03 — Sliding Window

## When to Use

- Find a subarray / substring satisfying a condition
- Keywords: "contiguous", "consecutive", "substring", "subarray"
- Brute force is O(n²) checking all subarrays → sliding window optimizes to O(n)

## Template

```typescript
// Fixed window (size k)
let windowSum = 0;
for (let i = 0; i < arr.length; i++) {
  windowSum += arr[i];
  if (i >= k) windowSum -= arr[i - k]; // remove leftmost
  if (i >= k - 1) result = Math.max(result, windowSum);
}

// Dynamic window (grow right, shrink left)
let left = 0;
for (let right = 0; right < arr.length; right++) {
  // 1. Add arr[right] to the window
  // 2. Shrink while window is invalid
  while (windowIsInvalid) {
    // Remove arr[left] from the window
    left++;
  }
  // 3. Update result
  result = Math.max(result, right - left + 1);
}
```

## Problems

### Easy

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 1 | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | Fixed |✅| 04/05/2026 |
| 2 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Dynamic |✅| 04/05/2026 |

### Medium

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Dynamic |✅| 05/05/2026 |
| 4 | [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) | Dynamic |✅| 05/05/2026 |
| 5 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | Dynamic |✅| 05/05/2026 |
| 6 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | Fixed | | |
| 7 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Fixed | | |
| 8 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Dynamic | | |

### Hard

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 9 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Dynamic | | |

## Hints

<details><summary>Maximum Average Subarray I</summary>Compute sum of first k elements. Slide: add right, subtract left. No need to recompute sum each time.</details>
<details><summary>Best Time to Buy and Sell Stock</summary>Track min price so far, compute profit at each step.</details>
<details><summary>Longest Substring Without Repeating</summary>Set tracks chars in window. On duplicate → shrink left until duplicate is removed.</details>
<details><summary>Max Consecutive Ones III</summary>Window can contain at most k zeroes. Shrink left when zero count exceeds k.</details>
<details><summary>Minimum Size Subarray Sum</summary>Expand right until sum >= target, then shrink left to find minimum length.</details>
<details><summary>Permutation in String</summary>Fixed window of size s1.length. Compare frequency map of window with frequency map of s1.</details>
<details><summary>Find All Anagrams</summary>Same as Permutation in String, but collect all starting indices instead of returning boolean.</details>
<details><summary>Longest Repeating Character Replacement</summary>Track count of most frequent char in window. Shrink when window size - maxFreq > k.</details>
<details><summary>Minimum Window Substring</summary>Two maps + matched counter. Expand right until all chars matched, shrink left to find minimum.</details>
