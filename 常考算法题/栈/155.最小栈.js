/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
// 题目：https://leetcode.cn/problems/min-stack/
// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data_stack = []
  this.min_stack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.data_stack.push(val)
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length -1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.data_stack.pop()
  this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data_stack[this.data_stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length -1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

