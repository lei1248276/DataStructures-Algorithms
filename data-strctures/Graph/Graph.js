import {Dictionary} from "../Dictionary/Dictionary.js";

export class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }
  /* 添加顶点 */
  addVertex(v) {
    // 首先判断顶点数组（列表）中是否存在
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  /* 添加边 */
  addEdge(v, w) {
    // 该顶点不存在就添加
    if (!this.adjList.get(v)) this.addVertex(v);
    // 该顶点不存在就添加
    if (!this.adjList.get(w)) this.addVertex(w);
    // 添加 v 到 w 的边
    this.adjList.get(v).push(w);
    // 如果是有向图在生成 w 到 v 的边
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  /* 返回顶点数组（列表） */
  getVertices() {
    return this.vertices;
  }

  /* 返回邻接表 */
  getAdjList() {
    return this.adjList;
  }

  toString() {
    let str = '';
    for (let i = 0, vertices = this.vertices.length; i < vertices; i++) {
      str += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0, neiLength = neighbors.length; j < neiLength; j++) {
        str += `${neighbors[j]} `;
      }
      str += '\n';
    }
    return str;
  }
}

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());

import {breadthFirstSearch, BFS} from "../../algorithms/Graph/Breadth-First-Search.js";
import {Stack_Arr} from "../Stack/Stack.js";

let printVertex = value => console.log('Visited vertex: ' + value);
breadthFirstSearch(graph, vertices[0], printVertex);

console.log(graph);

let shortestPathA = BFS(graph, vertices[0]);
console.log(shortestPathA);

const fromVertex = vertices[0];
for (let i = 0; i < vertices.length; i++) {
  const toVertex = vertices[i];
  const path = new Stack_Arr();
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ` - ` + path.pop();
  }
  console.log(s);
}

import {depthFirstSearch, DFS} from "../../algorithms/Graph/Depth-First-Search.js";

depthFirstSearch(graph, printVertex);

let graph2 = new Graph(true);
let vertices2 = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < vertices2.length; i++) {
  graph2.addVertex(vertices2[i]);
}
graph2.addEdge('A', 'C');
graph2.addEdge('A', 'D');
graph2.addEdge('B', 'D');
graph2.addEdge('B', 'E');
graph2.addEdge('C', 'F');
graph2.addEdge('F', 'E');
const result = DFS(graph2);
const fTimes = result.finished;
let s = '';
for (let count = 0; count < vertices2.length; count++) {
  let max = 0;
  let maxName = null;
  for (let i = 0; i < vertices2.length; i++) {
    if (fTimes[vertices2[i]] > max) {
      max = fTimes[vertices2[i]];
      maxName = vertices2[i];
    }
  }
  s += ` - ` + maxName;
  delete fTimes[maxName];
}
console.log(s);