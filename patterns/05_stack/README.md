# 05 — Stack

## When to Use

- Nesting / matching (brackets, HTML tags)
- "Next greater / smaller element" → Monotonic Stack
- Undo the most recent operation
- Evaluate expressions

## Template

```typescript
// Basic stack: matching brackets
const stack: string[] = [];
for (const char of s) {
  if (isOpen(char)) stack.push(char);
  else {
    if (stack.length === 0 || !isMatch(stack.pop()!, char)) return false;
  }
}
return stack.length === 0;

// Monotonic stack: next greater element
const result = new Array(arr.length).fill(-1);
const stack: number[] = []; // stores indices
for (let i = 0; i < arr.length; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    const idx = stack.pop()!;
    result[idx] = arr[i];
  }
  stack.push(i);
}
```

## Problems

### Easy

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 1 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Matching |✅| 15/05/2026 |
| 2 | [Baseball Game](https://leetcode.com/problems/baseball-game/) | Simulation |✅| 15/05/2026 |
| 3 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | Monotonic |✅| 16/05/2026 |
| 4 | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | Design |✅| 16/05/2026 |

### Medium

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 5 | [Min Stack](https://leetcode.com/problems/min-stack/) | Design |✅| 17/05/2026 |
| 6 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Monotonic |✅|18/05/2026|
| 7 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | Monotonic |✅|18/05/2026|

### Hard

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 8 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Monotonic |✅| 20/05/2026 |

## Hints

<details><summary>Valid Parentheses</summary>Open bracket → push. Close bracket → pop and compare. Stack must be empty at the end.</details>
<details><summary>Baseball Game</summary>Simulate: push scores, pop/peek for "C"/"D"/"+". Return sum of stack.</details>
<details><summary>Next Greater Element I</summary>Monotonic decreasing stack. Pop when a larger element appears — that's the next greater.</details>
<details><summary>Implement Queue using Stacks</summary>Two stacks: push to stack1, pop from stack2. When stack2 empty, pour stack1 into stack2.</details>
<details><summary>Min Stack</summary>Keep a second stack tracking the current min at each level. Push min of (val, current min).</details>
<details><summary>Daily Temperatures</summary>Monotonic decreasing stack of indices. Pop when a warmer day found, distance = i - popped index.</details>
<details><summary>Online Stock Span</summary>Monotonic decreasing stack of [price, span]. Pop and accumulate span while top <= current price.</details>
<details><summary>Largest Rectangle in Histogram</summary>Monotonic increasing stack. When popping bar, calculate area with that bar as the shortest height. Width = i - stack.top - 1.</details>

