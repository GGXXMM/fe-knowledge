/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
// 题目：https://leetcode-cn.com/problems/reverse-linked-list/
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1、迭代
// 迭代1
// var reverseList = function(head) {
//   let prev = null;
//   let cur = head;
//   while(cur) {
//     const next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
//   return prev;
// };

// 迭代2：解构赋值
var reverseList = function(head) {
  let [prev, curr] = [null, head];
  while(curr != null) {
    // 解构复制
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev
};

// 递归
var reverseList = function(head) {
  if(head == null || head.next == null) {
    return head
  }

  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
// @lc code=end

