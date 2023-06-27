/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
// 题目：https://leetcode-cn.com/problems/linked-list-cycle/
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
 * @return {boolean}
 */
// 1、暴力法
// var hasCycle = (head) => {
//   let cur1 = head;    // cur1指针
//   let step1 = 0;      // cur1指针走的步数
//   while (cur1) {
//     step1++;
//     let cur2 = head;  // cur2指针从头遍历
//     let step2 = 0;    // cur2指针走的步数
//     while (cur2) {
//       step2++;
//       if (cur1 == cur2) {     // cur1和cur2的元素相同
//         if (step1 == step2) { // 如果走的步数一样，即走到了cur1这里
//           break;              // 退出内层while
//         } else {              // 相遇但步数不一样
//           return true;        // 说明链表有环。cur1比cur2多走一个环
//         }
//       }
//       cur2 = cur2.next;   // cur2一次走一步
//     }
//     cur1 = cur1.next;     // cur1一次走一步
//   }
//   return false;
// };

// 2、哈希表：时间复杂度O(n)，空间复杂度O(n)
// var hasCycle = (head) => {
//   let map = new Map();
//   while(head) {
//     if(map.has(head)) return true;
//     map.set(head, true);
//     head = head.next;
//   }
//   return false;
// }

// 3、快慢指针：时间复杂度O(n)，空间复杂度O(1)
var hasCycle = function(head) {
    if(!head || !head.next) {
      return false
    }
    let slow = head;
    let fast = head.next;

    while(fast !== null && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast) {
        return true;
      }
    }
    return false;
};
// @lc code=end

