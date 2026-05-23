# 01 — HashMap / HashSet

## When to Use

- Count frequency of elements
- Check if something was seen before (O(1) lookup)
- Find pairs/groups satisfying a condition
- Map one value to another

## Template

```typescript
// Frequency counting
const freq = new Map<number, number>();
for (const num of arr) {
  freq.set(num, (freq.get(num) ?? 0) + 1);
}

// Complement lookup
const seen = new Map<number, number>(); // value → index
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (seen.has(complement)) return [seen.get(complement)!, i];
  seen.set(nums[i], i);
}
```

## Problems

### Easy

| # | Problem | Status | Date |
|---|---------|--------|------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) |✅| 27/04/2026 |
| 2 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) |✅| 27/04/2026 |
| 3 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) |✅| 28/04/2026 |
| 4 | [Majority Element](https://leetcode.com/problems/majority-element/) |✅| 28/04/2026 |
| 5 | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) |✅| 28/04/2026 |
| 6 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) |✅| 28/04/2026 |
| 7 | [Ransom Note](https://leetcode.com/problems/ransom-note/) |✅| 28/04/2026 |
| 8 | [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |✅| 28/04/2026 |
| 9 | [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) |✅| 22/05/2026 |
| 10 | [First Letter to Appear Twice](https://leetcode.com/problems/first-letter-to-appear-twice/) |✅| 22/05/2026 |
| 11 | [Word Pattern](https://leetcode.com/problems/word-pattern/) |✅| 22/05/2026 |

### Medium

| # | Problem | Status | Date |
|---|---------|--------|------|
| 1 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) |✅| 29/04/2026 |
| 2 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) |✅| 29/04/2026 |
| 3 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) |✅| 29/04/2026 |
| 4 | [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/) |✅| 30/04/2026 |
| 5 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) |✅| 23/05/2026|
| 6 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) |✅| 23/05/2026 |
| 7 | [Contiguous Array](https://leetcode.com/problems/contiguous-array/) | | |

-
