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

function rightSideView(root: TreeNode | null): number[] {
    if(!root) return [];
    let queue: TreeNode[] = [root];
    let res: number[] = []; 

    while(queue.length > 0){
        let levelSize = queue.length;
        let temp = [];

        for(let i = 0; i < levelSize; i++){
            let currentNode = queue.shift();
            temp.push(currentNode.val);

            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }

        res.push(temp[temp.length - 1]);
    }

    return res;
};