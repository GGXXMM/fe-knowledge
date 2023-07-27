/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
// 题目：https://leetcode.cn/problems/generate-parentheses/
// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 1. 递归
// var generateParenthesis = function(n) {
//     let result = [];
//     // cur：当前字符串 left：当前字符左括号数 right：当前字符右括号数
//     const dfs = (cur, left, right) => {
//         if(cur.length === 2*n) {
//             result.push(cur);
//             return;
//         }
//         if(left < n) {
//             dfs(cur+'(', left+1, right);
//         }
//         if(right < left) {
//             dfs(cur+')', left, right+1);
//         }
//     }
//     dfs('', 0, 0);
//     return result;
// }

// 2. 暴力枚举
/**
 * 思路：
 * 1）枚举所有字符串组合
 * 2）验证是否是有效括号
 */
var generateParenthesis = function(n) {
    let result = [];
    // 生成所有字符串
    const generateAll = (cur, pos, result) => {
        if(pos === 2*n) {
            if(valid(cur)) {
                result.push(cur)
            }
        }else{
            generateAll(cur+'(', pos+1, result)
            generateAll(cur+')', pos+1, result)
        }
    }
    // 验证
    const valid = str => {
        let balance = 0;
        for(let char of str) {
            if(char === '('){
                ++balance;
            }else {
                --balance;
            }
            if(balance < 0) return false;
        }
        return balance === 0;
    }
    generateAll('',0, result)
}
/**
 * 3. 回溯
 * 思路：
 * 1）枚举拼接字符串组合
 * 2）验证是否是有效括号
 * 3）将有效括号字符串存入数组并返回，不符合再进入第1步
 */ 
var generateParenthesis = function(n) {
    let result = [];
    // 枚举拼接的字符串
    const backtrack = (len, bracket, result)=> {
        if (bracket.length === len) {
            if (valid(bracket)) {
                result.push(bracket);
            }
            return;
        }
        for (let str of ['(', ')']) {
            bracket += str;
            backtrack(len, bracket, result);
            bracket = bracket.slice(0, bracket.length - 1);
        }
    }
    // 验证有效括号
    const valid = str => {
        let balance = 0;
        for(let char of str) {
            if(char === '(') ++balance;
            else --balance;
            if(balance < 0) return false;
        }
        return balance === 0;
    }
    backtrack(n * 2, '', result);
    return result;
};
// @lc code=end

