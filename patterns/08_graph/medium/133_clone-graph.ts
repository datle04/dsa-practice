/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    if(!node) return node;
	let map = new Map<_Node, _Node>();

    function createNode(node: _Node){
        if(map.has(node)){
            return map.get(node);
        }
        const copy = new _Node(node.val);
        map.set(node, copy);
        for(const nei of node.neighbors){
            copy.neighbors.push(createNode(nei));
        }

        return copy;
    }

    return createNode(node);
};