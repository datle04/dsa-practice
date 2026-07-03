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

function findTilt(root: TreeNode | null): number {
    let totalTilt = 0;

    function sumTree(node: TreeNode  | null): number {
        if(!node) return 0;

        const left = sumTree(node.left);
        const right = sumTree(node.right);

        totalTilt += Math.abs(left - right);
        return left + right + node.val;
    }
    
    sumTree(root);

    return totalTilt;
};