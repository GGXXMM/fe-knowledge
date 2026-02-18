/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. 暴力枚举： 时间复杂度O(n^2)，空间复杂度O(1)
// var twoSum = function(nums, target) {
//     let result = [];
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (nums[i] + nums[j] === target) {
//                 result.push(i, j);
//             }
//         }
//     }
//     return result;
// };

// 2. 哈希表(空间换时间)： 时间复杂度O(n)，空间复杂度O(n)
// var twoSum = function(nums, target) {
//     let map = new Map();
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         let valIndex = map.get(target - nums[i]);
//         if (valIndex !== undefined) {
//             result.push(valIndex, i);
//         }
//         map.set(nums[i], i);
//     }
//     return result;
// };

// 3. 双指针： 时间复杂度O(nlogn)，空间复杂度O(1)
var twoSum = function(nums, target) {
    var left = 0, right = nums.length - 1;
    // 先排序(从小到大)
    nums.sort((a, b) => a - b);
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            left++;
        } else if (nums[left] + nums[right] > target) {
            right--;
        } else { // nums[left] + nums[right] === target
            return [left, right];
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]