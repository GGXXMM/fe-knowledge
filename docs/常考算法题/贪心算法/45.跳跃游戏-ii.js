/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */
// 题目：https://leetcode.cn/problems/jump-game-ii
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 贪心算法（反向查找出发位置）：时间复杂度O(n^2)，空间复杂度O(1)
/**
 * 思路：先找到最后一步跳跃前位置，尽可能距离最后位置最远；接下来找倒数第二位置以此类推。
 * 变量：position = nums.length - 1; steps = 0
 */
var jump = function(nums) {
  let position = nums.length - 1,
      steps = 0;
  
  while(position > 0) {
    for (let i = 0; i < position; i++) {
      if(i + nums[i] >= position) {
        position = i;
        steps++;
        break;
      }
    }
  }
  return steps;
};

// 2. 贪心算法（正向查找）：时间复杂度O(n)，空间复杂度O(1)
var jump = function(nums) {
  let maxPostion = 0,
      end = 0,
      steps = 0;
  
  for(let i = 0;i < nums.length - 1;i++) {
      maxPostion = Math.max(i + nums[i], maxPostion)
      // 遇到边界，更新为最远可跳位置，跳的steps次数加1
      if(i == end) {
          end = maxPostion;
          steps++;
      }
  }
  return steps;
}
// @lc code=end

