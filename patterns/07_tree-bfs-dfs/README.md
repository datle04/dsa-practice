# 07 — Tree BFS/DFS

## When to Use

- **DFS (recursion/stack):** find paths, compare structure, compute height/depth, validate BST
- **BFS (queue):** level-order traversal, shortest path in unweighted tree, right side view

## Template

```typescript
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// DFS — recursive
function dfs(node: TreeNode | null): number {
  if (!node) return 0; // base case
  const left = dfs(node.left);
  const right = dfs(node.right);
  return Math.max(left, right) + 1;
}

// BFS — level-order
function bfs(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const size = queue.length;
    const level: number[] = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
```

## Problems

### Easy

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 1 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | DFS |✅| 10/06/2026 |
| 2 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | DFS |✅| 12/06/2026 |
| 3 | [Same Tree](https://leetcode.com/problems/same-tree/) | DFS |✅| 12/06/2026 |
| 4 | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) | DFS |✅| 14/06/2026 |
| 5 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | DFS |✅| 14/06/2026 |

### Medium

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 6 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | BFS |✅| 15/06/2026 |
| 7 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | DFS |✅| 16/06/2026 |
| 8 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | DFS inorder |✅| 17/06/2026 |
| 9 | [Lowest Common Ancestor of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | DFS | | |
| 10 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | BFS | | |
| 11 | [Construct Binary Tree from Preorder and Inorder](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | DFS | | |

### Hard

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 12 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | DFS | | |

## Hints

<details><summary>Maximum Depth</summary>Base case: null → 0. Return max(left depth, right depth) + 1.</details>
<details><summary>Invert Binary Tree</summary>At each node, swap left and right children, then recurse on both.</details>
<details><summary>Same Tree</summary>Both null → true. One null → false. Compare vals, then recurse on both subtrees.</details>
<details><summary>Subtree of Another Tree</summary>For each node in the main tree, check isSameTree with the subtree. Combine Same Tree + DFS.</details>
<details><summary>Diameter of Binary Tree</summary>Diameter = left depth + right depth. Track max diameter as a side effect while computing depth.</details>
<details><summary>Level Order Traversal</summary>BFS template. Process all nodes at current level (for loop with queue.length), then move to next level.</details>
<details><summary>Validate BST</summary>Pass min/max bounds down. Each node must be within (min, max). Left child updates max, right child updates min.</details>
<details><summary>Kth Smallest in BST</summary>Inorder traversal of BST gives sorted order. Count nodes visited, return when count === k.</details>
<details><summary>Lowest Common Ancestor of BST</summary>If both values < node → go left. Both > node → go right. Otherwise current node is the LCA.</details>
<details><summary>Right Side View</summary>BFS level-order. Take the last node of each level.</details>
<details><summary>Construct from Preorder and Inorder</summary>Preorder[0] is root. Find root in inorder → left of it is left subtree, right is right subtree. Recurse.</details>
<details><summary>Maximum Path Sum</summary>At each node, compute max path through left and right. Update global max with left + right + node.val. Return node.val + max(left, right) upward (can only choose one branch).</details>

## Lessons Learned

-
