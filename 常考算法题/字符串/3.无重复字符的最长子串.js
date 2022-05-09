/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
/**
 * 思路：
 * 统计字符重复次数，需要用到散列表(map)
 * 滑动比较，需定义2个指针
 * 返回无重复字符子串的最长长度(maxLen)
 */
var lengthOfLongestSubstring = function(s) {
  let map = {}
  let left = 0, right = 0;
  let maxLen = 0;
  while(right< s.length) {
    let val = s[right];
    right++;
    if(map[val]) map[val]++;
    else map[val] = 1;
    while(map[val] > 1) {
      let d = s[left];
      left++;
      map[d]--;
    }
    if(maxLen< right- left){
      maxLen = right-left;
    }
  }
  return maxLen;
};
// @lc code=end
