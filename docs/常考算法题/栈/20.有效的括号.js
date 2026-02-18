/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
// 题目：https://leetcode-cn.com/problems/valid-parentheses/
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 栈的解法：时间复杂度O(n)，空间复杂度O(n)
var isValid = function(s) {
  const n = s.length;
  // 判断字符串奇偶
  if (n % 2 === 1) return false;
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];
  let top;
  // 匹配到左括号，将相应的右括号存入stack
  // 匹配到右括号，stack的顶部弹出，进行比对，相等继续，不相等返回无效false
  for(let char of s) {
    if(map[char]){// 匹配到左括号
      stack.push(map[char])
    }else{// 匹配到右括号
      top = stack.pop()
      if(top !== char) {
          return false
      }
    }
}
return !stack.length;
};
// @lc code=end


