/*
PASSES MOST TESTS

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function Node(course) {
    this.course = course;
    this.prerequisites = [];
}

function dfs(node, visited) {
    if (node.course in visited) {
	visited = {};
        return true;
    }
    
    visited[node.course] = true;
    
    for (var i=0; i<node.prerequisites.length; i++) {
        var foundLoop = dfs(node.prerequisites[i], { ...visited } );
	if (foundLoop) {
	    return true;
	}
    }

    visited = {};
    return false;
}

var canFinish = function(numCourses, prerequisites) {
    var graph = {};

    // create the nodes in the graph
    for (var i=0; i<numCourses; i++) {
	graph[i] = new Node(i);
    }
    
    for (var i=0; i<prerequisites.length; i++) {
        var course = prerequisites[i][0];
        var prerequisite = prerequisites[i][1];

	// Add prerequisites to node
	if (course in graph && prerequisite in graph) {
	    graph[course].prerequisites.push(graph[prerequisite]);
	}
    }
    
    for (var i=0; i<numCourses; i++) {
        if (i in graph) {
            var node = graph[i];
            var loopFound = dfs(node, {});
            if (loopFound)
                return false;
        }
    }
    
    return true;
};


console.log(canFinish(3, [[0,1],[0,2],[1,2]]));