/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
// 题目：https://leetcode.cn/problems/arranging-coins/
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 1、暴力循环：时间复杂度：O(n)
// var arrangeCoins = function(n) {
//   if(n <= 1){return n}
//   let sum = 0;
//   //遍历累加,如果超过n了，返回第a-1次
//   for(let i = 1;i<=n;i++){
//     sum += i;
//     if(sum > n) {
//       return i-1
//     }else if(sum == n){
//         return i
//     }
//   }
// };

// 2、二分查找：时间复杂度：O(logn)
var arrangeCoins = function(n) {
  if (n == 0) {
    return 0;
  }
  var left = 0;
  // 只有 n 个硬币的情况下，最大肯定不会超过 n 行，所以这里把搜索的右侧界限定为 n
  var right = n;
  while (left <= right) {
    var mid = left + ((right - left) >> 1);
      // 形成 mid 行的阶梯一共需要 costToFinishMid 个硬币，这里是数学公式
    var costToFinishMid = (1 + mid) * mid / 2;
    if (costToFinishMid == n) {
      return mid;
    } else if (costToFinishMid < n) {
      left = mid + 1;
    } else if (costToFinishMid > n) {
      right = mid - 1;
    }
  }
  // 按照上述这种写法，right 在这里指向距离 target 最近的左侧元素的位置
  return right;
};
// @lc code=end

