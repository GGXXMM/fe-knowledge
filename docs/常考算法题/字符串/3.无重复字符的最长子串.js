/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
// 题目：https://leetcode.cn/problems/longest-substring-without-repeating-characters
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 1、暴力枚举+set：时间复杂度O(n^2)，空间复杂度O(n)
/**
 * 思路：
 * 1）双重 for 循环，枚举所有无重复子串的组合（用 Set 判重）
 * 2）用 maxLen 记录当前位置向右扫描的最长无重复子串的长度
 * 3）求所有子串的最大长度，返回即可
 */
// 优点：简单直观，易于理解
// 缺点：效率低，对于长字符串会超时，不适合长字符串
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  let res = 0;
  for(let i = 0;i < len;i++) {
    let set = new Set();
    let maxLen = 0;
    let j = i;
    // 判断字符s[j]是否是无重复
    while(j < len && !set.has(s[j])) {
      set.add(s[j]);
      maxLen++;
      j++;
    }
    res = Math.max(res, maxLen);
  }
  return res;
}

// 2、双指针（滑动窗口）：时间复杂度O(n)，空间复杂度O(min(n,m))
/**
 * 思路：
 * 1）初始化窗口对象 window、定义左右指针 left=0,right=0、记录最大子串长度 maxLen=0
 * 2）right 右指针右移，扩展窗口大小，window 存入当前字符，若次数 > 1（有重复字符），则左指针右移减少计数
 * 3）更新每次窗口最长长度：maxLen = max(maxLen, right - left)，返回即可
 */
// 优点：高效，适合大规模数据（滑动窗口思路通用，可扩展到其他子串问题）
// 缺点：需要额外空间存储字符及计数
var lengthOfLongestSubstring = function(s) {
  let window = {};
  let [left, right] = [0, 0];
  let maxLen = 0;
  while (right < s.length) {
    let c = s[right];
    right++;
    if (window[c]) window[c]++;
    else window[c] = 1;
    while (window[c] > 1) {
      let d = s[left];
      left++;
      window[d]--;
    }
    maxLen = Math.max(maxLen, right - left);
  }
  return maxLen;
};

// 3、双指针（Map判重优化版）：时间复杂度O(n)，空间复杂度O(min(n,m))
/**
 * 思路：
 * 1）初始化 map 检测重复字符，定义l、r左右指针，r指针从左向右扫描，扩展窗口大小
 * 2）扫描过程中碰到重复字符（哈希 map 查询字符是否存在判重），更新l指针为当前字符的后1位，重置滑动窗口起始位置；不是重复字符则存入哈希 map
 * 3）记录每个窗口大小，取最大值即为所求
 */
// 优点：高效简洁，直接索引字符位置信息
// 缺点：仅适用于位置判断，不如计数灵活
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;
  let l = 0;
  let map = new Map();
  for(let r = 0;r<s.length;r++) {
    if(map.has(s[r]) && map.get(s[r]) >= l) {// 重复字符
      // 重置滑动窗口起始位置
      l = map.get(s[r]) + 1;
    }
    map.set(s[r], r);
    maxLen = Math.max(r-l+1, maxLen);
  }
  return maxLen;
}
// @lc code=end
