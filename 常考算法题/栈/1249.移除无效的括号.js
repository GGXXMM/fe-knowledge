/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */
// 题目：https://leetcode.cn/problems/minimum-remove-to-make-valid-parentheses/
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 栈
/**
 * 思路：2次遍历
 * 1.遍历字符串，匹配括号，定义存储左、右括号的栈，匹配到对称的删除，记录多余的下标；
 * 2.遍历字符串删除多余下标的元素
 * 时间复杂度：o(n)，空间复杂度：o(n)
 */
var minRemoveToMakeValid = function (s) {
  let len = s.length;
  // 记录'(',')'的下标索引，匹配到的删除，多余的存放下标
  let leftDel = [],rightDel = [];
  for (let i = 0; i < len; i++) {
    const char = s[i];
    if(char == '(') {
      leftDel.push(i)
    }else if(char == ')') {
      // 如果左括号有值，则弹出栈顶元素
      if(leftDel.length > 0) {
        leftDel.pop();
      }else{
        rightDel.push(i);
      }
    }
  }
  // 根据记录删除无效的括号
  let res = [...s], filter = leftDel.concat(rightDel), l = filter.length;
  for (let i = 0; i < l; i++) {
    res[filter[i]] = ''
  }
  return res.join('');
};
// @lc code=end
