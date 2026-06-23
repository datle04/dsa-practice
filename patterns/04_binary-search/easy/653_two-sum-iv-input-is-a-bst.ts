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

function findTarget(root: TreeNode | null, k: number): boolean {
    let map = new Map<number, number>();
    
    function dfs(node, target, map): boolean{
        if(!node) return false;
        let completion = target - node.val;
        if(map.has(completion)){
            return true;
        } else {
            map.set(node.val, completion);
        }

        return dfs(node.left, target, map) || dfs(node.right, target, map);
    }

    return dfs(root, k, map);
};