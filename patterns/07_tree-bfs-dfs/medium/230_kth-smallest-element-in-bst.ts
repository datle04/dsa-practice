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

function kthSmallest(root: TreeNode | null, k: number): number {
    let result: number[] = [];

    function inOrder(node: TreeNode | null, arr: number[]): number[] {
        if(node){
            inOrder(node.left, arr);
            arr.push(node.val);
            inOrder(node.right, arr);
        }

        return arr;
    }

    inOrder(root, result);

    return result[k - 1];
};