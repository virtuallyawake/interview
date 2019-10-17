/**
 * @param {string[][]} tickets
 * @return {string[]}
 */


function Node(source, destination) {
    this.source = source;
    this.destinations = [destination];
}

function dfs(from, graph, route) {
  var node = graph[from];

  while (node && node.destinations.length > 0) {
    var destination = node.destinations.shift();
    dfs(destination, graph, route);
  }

  route.unshift(from);
  console.log(route);
}

var findItinerary = function(tickets) {
  // Create the graph
  var graph = {};
  for (var i=0; i<tickets.length; i++) {
    [source, destination] = tickets[i];
    // graph
    if (source in graph) {
      graph[source].destinations.push(destination);
    } else {
      graph[source] = new Node(source, destination);
    }
  }

  var cities = Object.keys(graph);
  cities.forEach(function(city) {
      graph[city].destinations.sort();
  });

  var start = graph["JFK"];
  var route = [];
  var numCities = tickets.length + 1;
  dfs("JFK", graph, route);

  return route;
};


/*
var findItinerary = function(tickets) {
    let result=[];
    let map={
        "JFK": []
    };
    tickets.forEach((singleTicket) =>{
        if(map[singleTicket[0]] == undefined){
            map[singleTicket[0]] = [];
        }
        map[singleTicket[0]].push(singleTicket[1]);
    })
    Object.entries(map).forEach((singlePro) => {
        singlePro[1].sort();
    })
    const getItineray = (from) => {
        const tos= map[from];
        while(tos && tos.length>0){
            getItineray(tos.shift());
        }
        result.unshift(from);
    }
    getItineray("JFK");
    return result;
}; */
