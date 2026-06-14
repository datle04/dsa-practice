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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(!root) return 0;
    const throughRoot = maxDepth(root.left) + maxDepth(root.right);
    const leftDia = diameterOfBinaryTree(root.left);
    const rightDia = diameterOfBinaryTree(root.right);
    return Math.max(throughRoot, leftDia, rightDia);
};

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}