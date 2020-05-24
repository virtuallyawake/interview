/*
133. Clone Graph
https://leetcode.com/problems/clone-graph/

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
*/

/**
 * @param {Node} node
 * @return {Node}
 */

function traverseDFS(node, cloned) {
    let nodeCopy = null;
    if (node.val in cloned) {
        nodeCopy = cloned[node.val];
    } else {
        nodeCopy = new Node(node.val);
        cloned[node.val] = nodeCopy;
    }

    node.neighbors.forEach(neighbor => {        
        if (neighbor.val in cloned) {
            nodeCopy.neighbors.push(cloned[neighbor.val]);
        } else {
            let neighborCopy = new Node(neighbor.val);
            nodeCopy.neighbors.push(neighborCopy);
            cloned[neighbor.val] = neighborCopy;
            traverseDFS(neighbor, cloned);
        }
    });
}


function traverseBFS(node, cloned) {
    let queue = [];
    queue.push(node);
    
    while(queue.length > 0) {
        let n = queue.shift();
        let nCopy = null;
        if (n.val in cloned) {
            nCopy = cloned[n.val];
        } else {
            nCopy = new Node(node.val);
            cloned[n.val] = nCopy;
        }
        
        n.neighbors.forEach(neighbor => {
            if (neighbor.val in cloned) {
                nCopy.neighbors.push(cloned[neighbor.val]);
            } else {
                neighborCopy = new Node(neighbor.val);
                cloned[neighbor.val] = neighborCopy;
                nCopy.neighbors.push(neighborCopy);
                queue.push(neighbor);
            }
        });
    }
}

var cloneGraph = function(node) {
    if (node === null)
        return null;
    
    let cloned = {};    
    traverseBFS(node, cloned);

    return cloned[node.val];
};
