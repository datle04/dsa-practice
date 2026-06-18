/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
    let globalMax = -Infinity;

    function dfs(node: TreeNode | null): number {
        if(!node) return 0;

        const leftMax = Math.max(0, dfs(node.left));
        const rightMax = Math.max(0, dfs(node.right));

        const currentPathSum = node.val + leftMax + rightMax;

        globalMax = Math.max(globalMax, currentPathSum);

        return node.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return globalMax;
};
