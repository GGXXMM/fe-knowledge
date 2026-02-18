/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归
var invertTree = function(root) {
  // 终止条件
  if(root == null) {
    return root
  }
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
// @lc code=end

