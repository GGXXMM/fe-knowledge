/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

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
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var preorderTraversal = function(root, arr = []) {
    if(root) {
        // 根 -> 左 -> 右
        arr.push(root.val)
        preorderTraversal(root.left, arr)
        preorderTraversal(root.right, arr)
    }
    return arr
};
// @lc code=end

