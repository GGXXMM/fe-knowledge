/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */ 
// 1、暴力法：时间复杂度：O(n^3)，空间复杂度：O(1)
// var longestPalindrome = function(s) {
//   let maxStr = '', max = 0;
//   const len = s.length;
//   if(len == 0) return '';
//   if(len == 1) return s;
//   for(let i = 0;i<len;i++) {
//     for(let j = i+1;j<=len;j++) {
//       let tmpStr = s.substring(i, j)
//       if(isPalindrome(tmpStr) && tmpStr.length > max) {
//         maxStr = tmpStr;
//         max = maxStr.length;
//       }
//     }
//   }
//   return maxStr;
// }
// function isPalindrome(str) {
//   let len = str.length;
//   let mid = parseInt(len/2);
//   for(let i = 0;i<mid;i++) {
//     if(str[i] != str[len-i-1]){
//       return false;
//     }
//   }
//   return true;
// }

// 2、动态规划：时间复杂度：O(n^2)，空间复杂度：O(n^2)
// var longestPalindrome = function(s) {
//   let n = s.length;
//   if (n === 0) return "";

//   let res = '';
//   let dp = Array.from(new Array(n),() => new Array(n).fill(0));
//   // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
//   for(let i = n-1;i >= 0;i--){
//       for(let j = i;j < n;j++){
//           dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
//           if(dp[i][j] && j - i +1 > res.length){
//               res = s.substring(i,j+1);
//           }
//       }
//   }
//   return res;
// }

// 3、中心扩展算法：时间复杂度：O(n^2)，空间复杂度：O(1)
// var longestPalindrome = function(s) {
//   if(!s || s.length < 2){
//       return s;
//   }
//   let start = 0,end = 0;
//   let n = s.length;
//   // 中心扩展法
//   let centerExpend = (left,right) => {
//       while(left >= 0 && right < n && s[left] == s[right]){
//           left--;
//           right++;
//       }
//       return right - left - 1;
//   }
//   for(let i = 0;i < n;i++){
//       let len1 = centerExpend(i,i);
//       let len2 = centerExpend(i,i+1);
//       // 两种组合取最大回文串的长度
//       let maxLen = Math.max(len1,len2);
//       if(maxLen > end - start){
//           // 更新最大回文串的首尾字符索引
//           start = i - ((maxLen - 1) >> 1);
//           end = i + (maxLen >> 1);
//       }
//   }
//   return s.substring(start,end+1);
// };

// 4、Manacher算法（马拉车算法）：时间复杂度：O(n)，空间复杂度：O(n)
var longestPalindrome = function(s) {
  if(!s || s.length < 2){
      return s;
  }
  var s_f = '#'+s.split('').join('#')+'#';
  let c = 0,R = 0;
  var t_len = s_f.length;
  var maxLen = 0;
  var maxIndex = 0;
  var originIndex = 0;
  var p = new Array(t_len);
  p[0] = 0;
  for(var i = 1;i<t_len-1;i++){
      var j = 2*c-i;
      if(i<R){
          p[i] = Math.min(p[j],R-i)
      }else{
          p[i] = 0;
      }
      var left = i-p[i]-1;
      var right = i+p[i]+1;
      while(left>=0 && right<t_len && s_f[left]==s_f[right]){
          left--;
          right++;
          p[i]++;
      }
      if(i+p[i]>R){
          c = i;
          R = i+p[i];
      }
      if(p[i]>maxLen){
          maxLen = p[i];
          maxIndex = i;
          originIndex = parseInt((i-p[i])/2)
      }
  } 
  return s.substring(originIndex,originIndex + maxLen);
};

// @lc code=end

