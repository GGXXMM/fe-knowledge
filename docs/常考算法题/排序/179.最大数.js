/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */
// 题目：
// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
// 排序（借用sort函数）
var largestNumber = function(nums) {
  // 比较 ab、ba，按降序排列
  nums.sort((a, b)=> {
      let str1 = `${a}${b}`
      let str2 = `${b}${a}`
      return str2 - str1;
  })
  // 将数组转为字符串
  return nums[0] ? nums.join('') : '0';
};
// @lc code=end

