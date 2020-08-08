import {Queue} from "../../data-strctures/Queue/Queue.js";

/*
*   算法：广度优先算法（BSF）
*   数据结构：栈（stack）
*   描述：将顶点存入栈，顶点是沿着路径被探索的，存在新的相邻顶点就去访问
* */

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

  /* 广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的邻点（相邻顶点），就像一次访问图的一层 */
  /* 步骤：
  *   (1) 创建一个队列 Q。
      (2) 标注 v 为被发现的（灰色），并将 v 入队列 Q。
      (3) 如果 Q 非空，则运行以下步骤：
        (a) 将 u 从 Q 中出队列；
        (b) 标注 u 为被发现的（灰色）；
        (c) 将 u 所有未被访问过的邻点（白色）入队列；
        (d) 标注 u 为已被探索的（黑色）。*/

export const breadthFirstSearch = (graph, startVertex, cb) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  // 1.全部初始化为白色
  const color = initializeColor(vertices);
  // 2.创建一个Queue来存储待访问和搜索的顶点
  const queue = new Queue();

  // 3.起始顶点入队
  queue.enqueue(startVertex);

  // 4.队列不为空时
  while (!queue.isEmpty()) {
    // 5.移除一个顶点
    const u = queue.dequeue();
    // 6.获取包含所有邻点的邻接表
    const neighbors = adjList.get(u);
    // 7.该顶点设置为灰色
    color[u] = Colors.GREY;
    for (let i = 0, neiLength = neighbors.length; i < neiLength; i++) {
      // 8.获取每个顶点的名字
      const w = neighbors[i];
      // 9.如果还没有被访问过（没访问就为白色）
      if (color[w] === Colors.WHITE) {
        // 10.则将其标注为已经发现了它,颜色设置为灰色
        color[w] = Colors.GREY;
        // 11.并将顶点加入队列
        queue.enqueue(w);
      }
    }
    // 12.完成探索该顶点和其相邻顶点后，标记为黑色
    color[u] = Colors.BLACK;
    // 13.如果传入回调就调用
    if (cb) {
      cb(u);
    }
  }
  console.log(adjList);
  console.log(color);
}

  /* 使用 BFS 寻找最短路径 */
export const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  const distances = {};
  const predecessors = {};

  queue.enqueue(startVertex);

  for (let i = 0, verLength = vertices.length; i < verLength; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0, neiLength = neighbors.length; i < neiLength; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors
  }
}
