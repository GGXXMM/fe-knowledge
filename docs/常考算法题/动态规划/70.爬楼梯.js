/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
// 题目：https://leetcode-cn.com/problems/climbing-stairs/
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 1、递归：时间复杂度：O(2^n)，空间复杂度：O(n)
// var climbStairs = function(n) {
//     if(n === 1) return 1;
//     if(n === 2) return 2;
//     return climbStairs(n-1) + climbStairs(n-2);
// }

// 2、动态规划：时间复杂度：O(n)
var climbStairs = function(n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2;i <= n;i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
};
// @lc code=end

