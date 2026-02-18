/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */
// 题目：https://leetcode.cn/problems/restore-ip-addresses/
// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
// 回溯：时间复杂度O(3^SEG_COUNT),SEG_COUNT = 4，IP地址的段数；空间复杂度O(SEG_COUNT)
var restoreIpAddresses = function(s) {
  let res = [], path = [];
  
  // 回溯剪枝
  const backtracking = i => {
    const len = path.length;
    // 终止条件
    if(len > 4) return;
    if(len === 4 && i === s.length) {
      res.push(path.join('.'));
      return;
    }
    for (let j = i; j < s.length; j++) {
      const str = s.slice(i, j+1)
      // 不合法情况：
      // 1）超过255
      // 2）0开头的
      if(str.length > 3 || +str > 255) break;
      if(str.length > 1 && str[0] === '0') break;
      path.push(str);
      backtracking(j+1);
      path.pop();
    }
  }
  backtracking(0);
  return res;
};
// @lc code=end

