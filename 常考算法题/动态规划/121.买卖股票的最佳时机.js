/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
// 题目：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 1. 暴力循环：时间复杂度:O(n^2)，空间复杂度O(1)
var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i])
    }
  }
  return maxProfit;
};

// 2. 动态规划(1次遍历)：时间复杂度O(n)，空间复杂度O(1)
// dp方程：maxProfit = prices[i] - minPrice
var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i];
    }else if(prices[i] - minPrice > maxProfit){
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}
// @lc code=end

