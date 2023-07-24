/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */
// 题目：https://leetcode.cn/problems/median-of-two-sorted-arrays/
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 1、合并排序+二分查找
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length === nums2.length === 0) return 0;
    // 合并排序
    const arr = nums1.concat(nums2).sort((a,b)=> a-b);
    const len = arr.length;
    if(len === 1) return arr[0];
    // 判断合并数组个数奇偶
    if(len % 2 == 0){
        const mid = len/2;
        return (arr[mid-1] + arr[mid])/ 2 === 0 ? 0 : (arr[mid-1] + arr[mid])/ 2;
    }else{
        const mid = Math.floor(len/2);
        return arr[mid];
    }
};
// @lc code=end

