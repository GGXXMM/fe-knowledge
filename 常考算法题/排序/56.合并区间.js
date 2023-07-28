/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
// 题目：https://leetcode.cn/problems/merge-intervals/
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// intervals = [[1,3],[2,6],[15,18],[8,10]]
// 期望输出：[[1,6],[8,10],[15,18]]
// 排序+双指针：时间复杂度O(nlogn)，即为排序的时间复杂度
var merge = function(intervals) {
    if(intervals.length === 0) return []
    // 先排序
    intervals.sort((a,b)=> a[0] - b[0])
    // 双指针比较
    let mergeArr = [intervals[0]];
    let last, curr;
    for (let i = 1; i < intervals.length; i++) {
        last = mergeArr[mergeArr.length -1];
        curr = intervals[i]
        if(last[1] >= curr[0]){
            last[1] = Math.max(curr[1], last[1])
        }else{
            mergeArr.push(curr)
        }
    }
    return mergeArr;
};
// @lc code=end