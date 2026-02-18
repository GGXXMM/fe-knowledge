/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */
// 题目：https://leetcode.cn/problems/number-of-islands/
// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 1、DFS 深度优先搜索：时间复杂度O(mn),m网格行数,n网格列数
// var numIslands = function(grid) {
//   let count = 0
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === '1') {
//         count++
//         turnZero(i, j, grid)
//       }
//     }
//   }
//   return count
// };
// function turnZero(i, j, grid) {
//   if (i < 0 || i >= grid.length || j < 0 
//        || j >= grid[0].length || grid[i][j] === '0') return
//   grid[i][j] = '0'
//   turnZero(i,j+1,grid)// 向右
//   turnZero(i+1,j,grid)// 向下
//   turnZero(i,j-1,grid)// 向左
//   turnZero(i-1,j,grid)// 向上
// }

// 2、BFS：时间复杂度O(mn),m网格行数,n网格列数
var numIslands = function(grid) {
  if(grid.length < 1) return 0
  let m = grid.length
  let n = grid[0].length
  let islands = 0
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(grid[i][j] == 1){
        islands++
        grid[i][j] = 0            // 把查找过的项变成0 防止重新查找
        let queue = []
        queue.push([i, j])        // 把当前点加入队列
        while(queue.length > 0){  // 当队列不为空时, 继续循环
          let cur = queue.shift()  // 拿出队列第一项
          let x = cur[0], y = cur[1]
          // 上下左右检查
          if(x - 1 >= 0 && grid[x-1][y] == 1){  // 上
            queue.push([x - 1, y])
            grid[x - 1][y] = 0
          }
          if(x + 1 < m && grid[x + 1][y] == 1){  // 下
            queue.push([x + 1, y])
            grid[x + 1][y] = 0
          }
          if(y - 1 >= 0 && grid[x][y - 1] == 1){  // 左
            queue.push([x, y - 1])
            grid[x][y - 1] = 0
          }
          if(y + 1 < n && grid[x][y + 1] == 1){  // 右
            queue.push([x, y + 1])
            grid[x][y + 1] = 0
          }
        }
      }
    }
  }
  return islands
};

// 并查集
// class UnionFind{
//   constructor(n){ //构造一个节点数为n的集合
//       this.count = n
//       this.parent = new Array(n)   
//       this.size = new Array(n)  // size数组记录着每棵树的重量
//       for (let i = 0; i < n; i++) {
//           this.parent[i] = i; // 自己是自己的parent
//           this.size[i] = 1;
//       }
//   }

//   union(p,q){ //连通结点p和结点q, p和q都是索引
//       let rootP = this.find(p);
//       let rootQ = this.find(q);
//       if(rootP === rootQ) return
//       // 小树接到大树下面，这样比较平衡
//       if (this.size[rootP] > this.size[rootQ]) {
//           this.parent[rootQ] = rootP;
//           this.size[rootP] += this.size[rootQ];
//       } else {
//           this.parent[rootP] = rootQ;
//           this.size[rootQ] += this.size[rootP];
//       }
//       this.count--;
//   }

//   isConnected(p, q) { //判断p,q是否连通
//       return this.find(p)=== this.find(q) 
//   }

//   find(x) { //找到x结点的root
//       while (this.parent[x] != x) {
//           // 进行路径压缩
//           this.parent[x] = this.parent[this.parent[x]];
//           x = this.parent[x];
//       }
//       return x;
//   }

//   getCount() { //返回节点数
//       return this.count;
//   }

// }

// var numIslands = function(grid) {
//   let m = grid.length
//   if(m === 0) return 0
//   let n = grid[0].length
//   const dummy = m*n + 1
//   const dirs = [[1,0],[0,1]]
//   const uf = new UnionFind(m*n + 1)
//   for(let x=0;x<m;x++){
//       for(let y=0;y<n;y++)
//           if(grid[x][y] === '0'){
//               uf.union(n*x+y,dummy)
//           }
//           else if(grid[x][y] === '1'){
//               for(let d of dirs){
//                   let r = x + d[0]
//                   let c = y + d[1]
//                   if(r>=m || c>=n) continue
//                   if(grid[r][c] === '1'){
//                       uf.union(n*x+y, n*r+c)
//                   }
//               }
//           }
//   }
//   return uf.getCount() - 1 //返回并查集的个数减一就行
// };
// @lc code=end

