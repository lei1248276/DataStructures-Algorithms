const Colors = {
  WHITE: 0, // 表示该顶点还没有被访问
  GREY: 1,  // 表示该顶点还没有被访问
  BLACK: 2  // 表示该顶点还没有被访问
};

const initializeColor = vertices => {
  const color = {};
  for (let i = 0, verLength = vertices.length; i < verLength; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const depthFirstSearchVisit = (u, color, adjList, cb) => {
  color[u] = Colors.GREY;
  if (cb) {
    cb(u);
  }
  const neighbors = adjList.get(u);
  for (let i = 0, neiLength = neighbors.length; i < neiLength; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, cb);
    }
  }
  color[u] = Colors.BLACK;
}

/*
* 深度优先搜索算法不需要一个源顶点。在深度优先搜索算法中，若图中顶点 v 未访问，则访问该顶点 v。
要访问顶点 v，照如下步骤做：
(1) 标注 v 为被发现的（灰色）；
(2) 对于 v 的所有未访问（白色）的邻点 w，访问顶点 w；
(3) 标注 v 为已被探索的（黑色）。*/

export const depthFirstSearch = (graph, cb) => {
  const vertices = graph.getVertices(),
      adjList = graph.getAdjList(),
      color = initializeColor(vertices);

  for (let i = 0, verLength = vertices.length; i < verLength; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, cb);
    }
  }
}

/*
* 对于给定的图 G，我们希望深度优先搜索算法遍历图 G 的所有节点，构建“森林”（ 有根树
的一个集合）以及一组源顶点（根），并输出两个数组：发现时间和完成探索时间。我们可以修
改 depthFirstSearch 函数来返回一些信息：
     顶点 u 的发现时间 d[u]；
     当顶点 u 被标注为黑色时， u 的完成探索时间 f[u]；
     顶点 u 的前溯点 p[u]。*/

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);

  for (let i = 0, neiLength = neighbors.length; i < neiLength; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;
}

export const DFS = graph => {
  const vertices = graph.getVertices(),
      adjList = graph.getAdjList(),
      color = initializeColor(vertices),
      d = {},
      f = {},
      p = {},
      time = {count: 0};

  for (let i = 0, verLength = vertices.length; i < verLength; i++) {
    d[vertices[i]] = 0;
    f[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0, verLength = vertices.length; i < verLength; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p
  }
}