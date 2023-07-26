/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
// 题目：https://leetcode.cn/problems/same-tree/
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 1.深度优先：
// 时间复杂度O(min(m,n))，m为p节点数，n为q节点数
// 空间复杂度O(min(m,n))，取决于递归调用层数
var isSameTree = function(p, q) {
    // 若p,q 都为空
    if(p === null && q === null) return true;
    // 若p,q 一个为空，一个不为空
    if(p === null || q === null) return false;
    // 比较p,q 节点的值
    if(p.val != q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// 2. JSON.stringify判断两个对象是否全等
var isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q)
}
// @lc code=end

