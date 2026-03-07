/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */
// 题目：https://leetcode.cn/problems/reverse-string/
// @lc code=start
/**
 * @param {character[]} str_arr
 * @return {void} Do not return anything, modify str_arr in-place instead.
 */
// 输入：str_arr = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 1. 调用reverse：时间复杂度O(n)，空间复杂度O(1)
var reverseString = function(str_arr) {
  return str_arr.reverse();
}

// 2. 逆序遍历：时间复杂度O(n)，空间复杂度O(1)
var reverseString = function(str_arr) {
  let left = 0;
  // 从右向左遍历：每次交换左指针和右指针的元素，左指针向右移动1位
  for (let right = str_arr.length - 1; right > left; right--) {
    [str_arr[left], str_arr[right]] = [str_arr[right], str_arr[left]];
    left++;
  }
  return str_arr;
}


// 2. 双指针交换：时间复杂度O(n)，空间复杂度O(1)
var reverseString = function(str_arr) {
  let left = 0, right = str_arr.length - 1;
  while (left < right) {
    [str_arr[left], str_arr[right]] = [str_arr[right], str_arr[left]];
    left++;
    right--;
  }
  return str_arr;
}

// 4. 双指针（原方法2/3优化写法）：时间复杂度O(n)，空间复杂度O(1)
var reverseString = function(str_arr) {
  for (let left = 0, right = str_arr.length - 1; left < right; ++left, --right) {
    [str_arr[left], str_arr[right]] = [str_arr[right], str_arr[left]];
  }
  return str_arr;
}
// 5. 递归交换
var reverseString = function(str_arr) {
  function helper(left, right) {
    if (left >= right) return;
    [str_arr[left], str_arr[right]] = [str_arr[right], str_arr[left]];
    helper(left + 1, right - 1);
  }
  helper(0, str_arr.length - 1);
  return str_arr
}


// 6. 使用 reduceRight 实现：时间复杂度O(n)，空间复杂度O(1)
var reverseString = function(str_arr) {
  return str_arr.reduceRight((acc, char) => [...acc, char], [])
}

console.log(reverseString(["h","e","l","l","o"]));
// @lc code=end

