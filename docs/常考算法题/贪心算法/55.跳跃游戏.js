/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */
// 题目：https://leetcode.cn/problems/jump-game/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 1. 贪心算法：时间复杂度O(n)，空间复杂度O(1)
// var canJump = function(nums) {
//     let reach = 0, len = nums.length;
    
//     for(let i = 0;i<len;i++) {
//         if(i > reach) return false;
//         reach = Math.max(i + nums[i], reach)
//     }
//     return true;
// };

// 2. 贪心算法（优化版）
// 仅遍历可到达最远位置前的元素
var canJump = function(nums) {
    if(nums.length == 1) return true;
    // 可到达最远位置
    let reach = 0, len = nums.length;
    for(let i = 0;i<=reach && reach < len-1;i++) {
        reach = Math.max(i + nums[i], reach)
        if(reach >= len -1) return true;
    }
    return false;
}

// 3. 倒推（从后向前遍历）:时间复杂度O(n)，空间复杂度O(1)
// var canJump = function(nums) {
//     let len = nums.length, last = len - 1;
//     for(let i = len - 2;i >= 0;i--) {
//         if(i + nums[i] >= last) last = i;
//     }
//     return last == 0;
// }
// @lc code=end
