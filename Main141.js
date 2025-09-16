class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addVertex(v) {
    if (!this.adjList.has(v)) this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
  bfs(start) {
    let visited = new Set(), queue = [start], result = [];
    visited.add(start);
    while (queue.length) {
      let node = queue.shift();
      result.push(node);
      for (let n of this.adjList.get(node)) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
        }
      }
    }
    return result;
  }
  dfs(start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);
    for (let n of this.adjList.get(start)) {
      if (!visited.has(n)) this.dfs(n, visited, result);
    }
    return result;
  }
}
let g = new Graph();
["A","B","C","D","E"].forEach(v => g.addVertex(v));
g.addEdge("A","B"); g.addEdge("A","C"); g.addEdge("B","D"); g.addEdge("C","E");
console.log(g.bfs("A"));
console.log(g.dfs("A"));
