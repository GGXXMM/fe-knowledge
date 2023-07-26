/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root, arr = []) {
    if(root) {
        // 左 -> 右 -> 根
        postorderTraversal(root.left, arr)
        postorderTraversal(root.right, arr)
        arr.push(root.val)
    }
    return arr
};
// @lc code=end

