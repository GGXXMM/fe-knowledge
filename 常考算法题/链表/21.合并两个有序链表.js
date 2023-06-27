/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
// 题目：https://leetcode-cn.com/problems/merge-two-sorted-lists/
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 1、双指针：
// 时间复杂度 O(M+N)： M, N 分别为链表 l1、l2的长度
// 空间复杂度 O(1)
var mergeTwoLists = function(l1, l2) {
  // 定义头结点
  let head = new ListNode();
  let cur = head;
  while(l1 && l2) {
    if(l1.val <= l2.val) {// l1结点小于l2
      // 先串起值小的结点
      cur.next = l1
      l1 = l1.next
    }else{
      cur.next = l2
      l2 = l2.next
    }
    // 串起一个结点，cur指针往后走
    cur = cur.next
  }
  // 退出循环后，l1、l2中只有一个为null
  // 将不是null的节点连接到cur
  cur.next = l1 !== null ? l1 : l2;
  return head.next;
}

// 2、递归
// var mergeTwoLists = function(l1, l2) {
//     if(l1 == null) {
//       return l2;
//     }else if(l2 == null) {
//       return l1;
//     }else if(l1.val < l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//     }else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//     }
// };
// @lc code=end

