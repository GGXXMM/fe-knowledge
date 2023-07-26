/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root, arr = []) {
    if(root) {
        // 左 -> 根 -> 右
        inorderTraversal(root.left, arr)
        arr.push(root.val)
        inorderTraversal(root.right, arr)
    }
    return arr
};
// @lc code=end

