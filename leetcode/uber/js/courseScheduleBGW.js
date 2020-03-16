/**                                                                                                                                                
 * @param {number} numCourses                                                                                                                       
 * @param {number[][]} prerequisites                                                                                                                
 * @return {boolean}                                                                                                                                
 */

// Returns true if cycle if found
function dfs(course, colors, graph) {
    // move course from white to gray
    colors[course] = "gray";
    
    for (var i=0; i<graph[course].length; i++) {
        var prerequisite = graph[course][i];
        if (colors[prerequisite] == "gray")
            return true;
        
        if (colors[prerequisite] == "black")
            continue;
        
        // the prerequisite is white
        if (dfs(prerequisite, colors, graph))
            return true;
    }
    
    //  move from gray to black
    colors[course] = "black";
    return false;
}


var canFinish = function(numCourses, prerequisites) {
    var graph = {};
    var colors = {};
    
    // create the nodes in the graph                              
    for (var i=0; i<numCourses; i++) {
        graph[i] = [];
        colors[i] = "white";
    }

    for (var i=0; i<prerequisites.length; i++) {
        var course = prerequisites[i][0];
        var prerequisite = prerequisites[i][1];
        graph[course].push(prerequisite);
    }

    // white/gray/black technique
    var whites = getWhites(colors);
    
    while (whites.length > 0) {
        var course = whites[0];
        if (dfs(course, colors, graph))
            return false;
        whites = countWhites(colors);
    }
    
    return true;
};

function getWhites(colors) {
    var courses = Object.keys(colors);
    return courses.filter(function(course) {
        if (colors[course]=="white")
            return true;
        return false;
    });    
}
