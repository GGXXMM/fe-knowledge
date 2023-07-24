/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
// 题目：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 1. 贪心算法：时间复杂度O(n)，空间复杂度O(1)
var maxProfit = function(prices) {
  let totalProfit = 0;
  let n = prices.length;
  for (let i = 1; i < n; ++i) {
      totalProfit += Math.max(0, prices[i] - prices[i - 1]);
  }
  return totalProfit;
};

// 2. 动态规划：时间复杂度O(n)，空间复杂度O(1)
/**
 * 状态方程：i 表示第几天，0/1 表示是否持有股票
 * dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 * dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
 */
var maxProfit = function(prices) {
  let n = prices.length;
  // 初始化 dp
  let dp = new Array(n).fill(0).map(v => new Array(2).fill(0))
  dp[0][0] = 0, dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
  }
  return dp[n-1][0];
}
// @lc code=end

