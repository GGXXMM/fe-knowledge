/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */
// 题目：https://leetcode.cn/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
// 递归
var isBalanced = function(root) {
  return dfs(root) >= 0;
};
var dfs = (root) => {
  if(root == null) return 0;
  let l = dfs(root.left);// 左子树的高度
  let r = dfs(root.right);// 右子树的高度
  if(l == -1|| r == -1) return -1;
  if(Math.abs(l-r) > 1) {
    return -1;
  }
  return Math.max(l, r)+1;
}
// @lc code=end

