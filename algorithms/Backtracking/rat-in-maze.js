/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  算法：回溯算法
    回溯是一种渐进式寻找并构建问题解决方式的策略。我们从一个可能的动作开始并试着用这个动作解决问题。如果不能解决，就回溯并选择另一个动作直到将问题解决。根据这种行为，回溯算法会尝试所有可能的动作（如果更快找到了解决办法就尝试较少的次数）来解决问题。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function findPath (maze, x, y, solution) {
  const n = maze.length;
  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1;
    return true;
  }
  if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
    solution[x][y] = 1;
    if (findPath(maze, x + 1, y, solution)) {
      return true;
    }
    if (findPath(maze, x, y + 1, solution)) {
      return true;
    }
    solution[x][y] = 0;
    return false;
  }
  return false;
}

export function ratInAMaze(maze) {
  const solution = [];
  for (let i = 0; i < maze.length; i++) {
    solution[i] = [];
    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0;
    }
  }
  if (findPath(maze, 0, 0, solution)) {
    return solution;
  }
  return `NO PATH FOUND`;
}

const maze = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 1]
];
console.log(ratInAMaze(maze));/*[
                                 [1, 0, 0, 0],
                                 [1, 1, 1, 0],
                                 [0, 0, 1, 0],
                                 [0, 0, 1, 1]
                               ]*/

let arr = (...arr) => [].concat(...arr);
console.log(arr([1, [2, 3, 4], [5, 6], 7, [8]]));