/**
 * [695] 岛屿的最大面积
 *
 * @format
 * @lc app=leetcode.cn id=695 lang=javascript
 */

// 题目：https://leetcode.cn/problems/max-area-of-island/
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 1. DFS深度优先：时间复杂度O(mn),m网格行数,n网格列数
// var maxAreaOfIsland = function(grid) {
//   let maxArea = 0, m = grid.length, n = grid[0].length;
//   for(let i = 0;i < m;i++) {
//     for(let j = 0;j < n;j++) {
//       if(grid[i][j] === 1) {
//         maxArea = Math.max(maxArea, areaOfIsland(grid, i, j));
//       }
//     }
//   }
//   return maxArea;
// };
// var areaOfIsland = (grid,i,j) =>{
//   if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 0;
//   let num = 1;
//   grid[i][j] = 0;
//   num += areaOfIsland(grid, i, j+1)
//   num += areaOfIsland(grid, i+1, j)
//   num += areaOfIsland(grid, i, j-1)
//   num += areaOfIsland(grid, i-1,j)

//   return num;
// }

// 2. BFS广度优先：时间复杂度O(mn),m网格行数,n网格列数；空间复杂度O(mn)
var maxAreaOfIsland = function (grid) {
  let maxArea = 0,
    row = grid.length,
    col = grid[0].length;
  let dx = [1, -1, 0, 0], dy = [0, 0, 1, -1]; //方向数组
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) continue; //循环网格，遇到0就跳过
      let queue = [[i, j]], curr = 0; //在队列中加入当前网格的值
      while (queue.length > 0) {
        let [x, y] = queue.shift(); //不断出队
        //越界判断
        if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) continue;
        ++curr; //更新岛屿的数量
        grid[x][y] = 0; //遍历过的网格置为0
        for (let k = 0; k < dx.length; k++) {
          //上下左右遍历，把下一层的节点加入队列
          queue.push([x + dx[k], y + dy[k]]);
        }
      }
      maxArea = Math.max(maxArea, curr); //更新最大岛屿面积
    }
  }
  return maxArea;
}
// @lc code=end
