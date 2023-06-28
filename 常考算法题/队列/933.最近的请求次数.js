/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */
// 题目：https://leetcode.cn/problems/number-of-recent-calls/
// @lc code=start
/**
 * 解题思路：
 * 1. 在t时间收到请求时，将t入队
 * 2. 从队首开始扫描，弹出时间早于 t-3000 的时间
 * 3. 循环后，队列长度就是需要返回的请求次数
 */
var RecentCounter = function() {
  this.pingArray = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.pingArray.push(t);
  while(this.pingArray[0] < t-3000) {
    this.pingArray.shift();
  }
  return this.pingArray.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

