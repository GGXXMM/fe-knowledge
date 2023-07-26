/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
// 题目：https://leetcode.cn/problems/powx-n/
// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 1、调用库函数：时间复杂度：O(1)
var myPow = function(x, n) {
  return Math.pow(x, n);
}
// 2、暴力法：时间复杂度：O(n)
var myPow = function(x, n) {
  if(n < 0) {
    x = 1/x;
    n = -n;
  }
  let result = 1;
  for(let i = 0;i < n;i++) {
    result = result * x;
  }
  return result;
}
// 3、递归+分治：时间复杂度：O(logn)
var myPow = function(x, n) {
  if(n === 0) return 1;// n为0直接返回1
  if(n < 0) {// n是负数
    return 1/myPow(x,-n);
  }
  if(n%2) {//n是奇数
    return x*myPow(x,n-1);
  }
  return myPow(x*x,n/2) //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
};
// @lc code=end
