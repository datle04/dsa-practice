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

function widthOfBinaryTree(root: TreeNode | null): number {
    if(!root) return 0;
    let queue: [TreeNode, number][] = [[root, 0]];
    let max = 0;

    while(queue.length > 0){
        const size = queue.length;
        const first = queue[0][1];
        const last = queue[size - 1][1];

        max = Math.max(max, last - first + 1);

        const next: [TreeNode, number][] = [];
        for(let i = 0; i < size; i++){
            const [node, idx] = queue[i];
            const normalized = idx - first;
            if(node.left) next.push([node.left, normalized * 2]);
            if(node.right) next.push([node.right, normalized * 2 + 1]);
        }

        queue = next;
    }

    return max;
};