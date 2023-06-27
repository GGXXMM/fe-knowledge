/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */
// 题目：https://leetcode.cn/problems/sliding-window-maximum
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 1、双指针+遍历求最大值：时间复杂度:O(kn)
var maxSlidingWindow = function(nums, k) {
  let len = nums.length;
  // 初始化结果数组
  let res = [];
  // 初始化左、右指针
  let left = 0, right = k-1;
  while(right < len) {
    let maxVal = calMax(nums, left, right);
    res.push(maxVal);
    left++;
    right++;
  }
  return res;
};
// 求数组中的最大值
function calMax(arr, left, right) {
  // 数组为空
  if(!arr || !arr.length) {
    return;
  }
  // 初始化第一个元素为最大值
  let max = arr[left];
  for (let i = left; i <= right; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}

// 2、双端队列：时间复杂度:O(n)
var maxSlidingWindow = function(nums, k) {
  let len = nums.length;
  // 初始化结果数组
  let res = [];
  // 初始化双端队列
  let deque = [];
  for(let i = 0;i< len;i++) {
    // 队列不为空，且队尾元素小于当前元素
    while(deque.length && nums[deque[deque.length-1]] < nums[i]) {
      // 将队尾元素不断出队，直至队尾元素大于当前元素
      deque.pop();
    }
    // 入队元素是索引
    deque.push(i);
    // 当队列头部元素已排除在滑动窗口之外
    if(deque.length && deque[0] <= i-k) {
      // 移除队头元素
      deque.shift();
    }
    if(i >= k-1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
}

// @lc code=end

