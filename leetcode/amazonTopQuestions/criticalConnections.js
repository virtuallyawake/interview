/*
1192. Critical Connections in a Network
https://leetcode.com/problems/critical-connections-in-a-network/

There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
 

Constraints:

1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.
*/

// Time exceeded. Passes 8/12
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */

function visitNodes(node, graph, visited) {
    if (visited[node]) {
        return;
    }
    
    visited[node] = true;

    graph[node].map(neighbor => {
        visitNodes(neighbor, graph, visited);
    })
}

function buildGraph(connections, ignore) {
    let graph = {};  // key: node, value: neighbors
    for(let i=0; i<connections.length; i++) {
        if (i === ignore) {
            continue;
        }
        const pair = connections[i];
        if (pair[0] in graph) {
            graph[pair[0]].push(pair[1]);
        } else {
            graph[pair[0]] = [pair[1]];
        }
        if (pair[1] in graph) {
            graph[pair[1]].push(pair[0]);
        } else {
            graph[pair[1]] = [pair[0]];
        }
    }
    
    return graph;
}

var criticalConnections = function(n, connections) {
    let critical = [];
    for (let i=0; i<connections.length; i++) {
        const graph = buildGraph(connections, i);

        for (let j=0; j<n; j++) {
            let visited = {};
            visitNodes(j, graph, visited);
            
            if (Object.keys(visited).length < n){
                critical.push(connections[i]);
                break;
            }
        }
    }
    
    return critical;
};
