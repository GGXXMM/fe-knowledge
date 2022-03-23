/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs 字符串数组
 * @return {string}
 */
// 1、横向扫描：时间复杂度：O(mn)
var longestCommonPrefix = function(strs) {
  if(strs.length == 0) return '';
  let first = strs[0];
  let minLen = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < strs.length; i++) {
     let len = twoCommonPrefix(first, strs[i])
     minLen = Math.min(len, minLen)
  }
  return first.slice(0, minLen);
};
// 返回公共前缀的下标
function twoCommonPrefix(str1, str2) {
  let i = 0, j = 0;
  let index = 0;
  while(i < str1.length && j < str2.length) {
      if (str1.charAt(i) === str2.charAt(j))  {
          index++;
      } else {
          return index;
      }
      i++;
      j++;
  }
  return index;
}
// @lc code=end