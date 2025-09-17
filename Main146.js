class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addVertex(v) {
    if (!this.adjList.has(v)) this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }
  bfs(start, target) {
    let visited = new Set();
    let queue = [[start]];
    while (queue.length > 0) {
      let path = queue.shift();
      let node = path[path.length - 1];
      if (node === target) return path;
      if (!visited.has(node)) {
        visited.add(node);
        let neighbors = this.adjList.get(node);
        for (let n of neighbors) {
          let newPath = [...path, n];
          queue.push(newPath);
        }
      }
    }
    return null;
  }
}
let g = new Graph();
[0,1,2,3,4].forEach(v => g.addVertex(v));
g.addEdge(0,1); g.addEdge(0,2); g.addEdge(1,3); g.addEdge(2,4);
console.log(g.bfs(0,4));
