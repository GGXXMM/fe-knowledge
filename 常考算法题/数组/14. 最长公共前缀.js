/**
 * @param {string[]} strs
 * @return {string}
 */
// 1. 横向扫描：时间复杂度：O(mn)，空间复杂度：O(1)
var longestCommonPrefix = function(strs) {
  // 不存在公共前缀，返回空字符串
  if(strs.length == 0) return '';
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
  if(strs.length == 0) return '';
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