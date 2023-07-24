/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */
// 题目：https://leetcode.cn/problems/assign-cookies/
// @lc code=start
/**
 * @param {number[]} g 
 * @param {number[]} s
 * @return {number}
 */
// 贪心算法
var findContentChildren = function(g, s) {
    // 排序(从小到大)
    g.sort((a,b)=> a-b);
    s.sort((a,b)=> a-b);
    
    let result = 0;
    let index = s.length - 1;// 饼干数组长度
    for (let i = g.length-1; i >= 0; i--) {// 遍历胃口
        // 大饼干先满足胃口大的
        if(index >= 0 && s[index] >= g[i]) {
            result++;
            index--;
        }
    }
    return result;
};
// @lc code=end

