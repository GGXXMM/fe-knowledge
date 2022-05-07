/**
 * @param {string[]} strs
 * @return {string}
 */
// 1. 横向扫描：时间复杂度：O(mn)，空间复杂度：O(1)
var longestCommonPrefix = function(strs) {
  // 不存在公共前缀，返回空字符串
  if(strs == null || strs.length == 0) return '';
  let first = strs[0];
  let minLen = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < strs.length; i++) {
    let len = twoCommonPrefix(first, strs[i]);
    let minLen = Math.min(minLen, len)
  }
  return first.substr(0,minLen);
};

// 2个字符串返回最长公共前缀长度
function twoCommonPrefix(str1, str2) {
  // 定义 i,j 指针
  let i, j= 0;
  let cnt = 0;
  while(i< str1.length && j< str2.length) {
    if(str1[i] == str2[j]){
      cnt++;
    }else{
      return cnt;
    }
    i++;
    j++
  }
  return cnt;
}

// 2. 纵向扫描：时间复杂度：O(mn)，空间复杂度：O(1)
var longestCommonPrefix = function(strs) {
  // 不存在公共前缀，返回空字符串
  if(strs == null || strs.length == 0) return '';
  let count = strs.length;
  for (let i = 0; i < strs[0].length; i++) {
    let str = strs[0][i];
    for (let j = 1; j < count; j++) {
      if(str != strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }
  // 如果不存在不相同，直接返回第1个字符串，即公共前缀
  return strs[0];
}

// 3. 二分查找：时间复杂度：O(mnlogm)，其中m是字符串数组中的字符串的最小长度，n是字符串的数量；空间复杂度：O(1)
var longestCommonPrefix = function (strs) {
  if (strs == null || !strs.length) return '';
  // 字符串数组中最短字符串的长度
  let minLength = Number.MAX_SAFE_INTEGER;
  for (let str of strs) {
    minLength = Math.min(minLength, str.length);
  }
  /* index之前是否是公共前缀  比方说strs = ["flower", "flow", "flight"] index=2，就是查看前2位 fl是否是公共前缀，结果返回true */
  const isCommonPrefix = (index) => {
    let str0 = strs[0].substring(0, index);
    let n = strs.length;
    for (let i = 1; i < n; i++) {
      // 判断每个字符串的长度为 index 的前缀是否相同
      let str = strs[i];
      if (str0 != str.substring(0, index)) return false;
    }
    return true;
  };
  // 左闭右开区间
  let low = 0,
    high = minLength;
  while (low < high) {
    // 为什么这里要用(high - low + 1)呢，因为如果不+1，那let strs = ["a"];就陷入死循环中了
    let mid = low + ((high - low + 1) >> 1);
    // 如果在前半段里面有公共前缀的话，再往后查找是否有符合条件的，因为我们现在要求的是最长公共前缀
    if (isCommonPrefix(mid)) low = mid;
    // 如果前半段不是公共前缀那我们就再缩小范围再查找，也就是在左半段的左半段里面查
    else high = mid - 1;
  }
  return strs[0].substring(0, low);
};