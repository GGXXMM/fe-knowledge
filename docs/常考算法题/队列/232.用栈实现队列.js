/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */
// 题目：https://leetcode.cn/problems/implement-queue-using-stacks
// @lc code=start
/**
 * Initialize your data structure here.
 */
// 使用2个栈实现队列，inStack和outStack
var MyQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inStack.push(x)
};

/**
 * 检查checkInStack
 */
MyQueue.prototype.checkInStack = function(){
  if(!this.outStack.length) {
    while(this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }
}
/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.checkInStack();
  return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  this.checkInStack();
  return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return (!this.inStack.length && !this.outStack.length);
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

