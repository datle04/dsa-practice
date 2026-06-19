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

function findMode(root: TreeNode | null): number[] {
    let prevVal = null;
    let currCount = 0;
    let maxCount = 0
    let res = [];

    function inOrder(node: TreeNode | null){
        if(!node) return;
        inOrder(node.left);
        
        if(node.val === prevVal){
            currCount++;
        } else {
            currCount = 1;
            prevVal = node.val;
        }

        if(currCount > maxCount){
            res = [node.val];
            maxCount = currCount;
        } else if (currCount === maxCount){
            res.push(node.val);
        }

        inOrder(node.right);
    }

    inOrder(root);

    return res;
};