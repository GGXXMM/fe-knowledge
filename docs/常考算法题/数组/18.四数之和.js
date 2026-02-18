/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// 题目：https://leetcode.cn/problems/4sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 排序+双指针
/**
 * 思路：固定2个数，然后用双指针查找剩余2数。初始化：左指针指向固定数的后一个，右指针指向最后一个数
 * 排序：时间复杂度O(nlogn)
 * 枚举四元组：时间复杂度是 O(n^3)，双层循环固定2个数，时间复杂度o(n^2)；双指针枚举剩余2个数，时间复杂度O(n)
 * 综上，时间复杂度：O(n^3)
 * 空间复杂度：O(logn)
 */
var fourSum = function(nums, target) {
  let result = [];
  if(nums.length < 4) return [];

  // 排序(从小到大)
  nums.sort((a,b) => a-b);
  const length = nums.length;
  for (let i = 0; i < length - 3; i++) {
    // 重复项跳过
    if(i > 0 && nums[i] === nums[i-1]) continue;
    // 剪枝（减少枚举）
    if(nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break;
    if(nums[i] + nums[length - 3] + nums[length -2] + nums[length - 1] < target) continue;

    for (let j = i + 1; j < length - 2; j++) {
      // 重复项跳过
      if(j > i + 1 && nums[j] === nums[j-1]) continue;
      // 剪枝（减少枚举）
      if(nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break;
      if(nums[i] + nums[j] + nums[length -2] + nums[length-1] < target) continue;

      // 双指针查找剩余2数
      let left = j + 1, right = length - 1;
      while(left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if(sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          // 相邻项重复
          while(left < right && nums[left] === nums[left+1]) {
            left++;
          }
          left++;
          while(left < right && nums[right] === nums[right-1]) {
            right--;
          }
          right--;
        }else if(sum < target){
          left++;
        }else{
          right--;
        }
      }
    }
  }
  return result;
};
// @lc code=end

console.log(fourSum([-2,-1,1,2,-2,0,0,2,-1,0,0,1], 0))