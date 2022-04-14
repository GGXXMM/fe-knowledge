/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 1. 暴力求解：时间复杂度：O(n^2)，空间复杂度：O(1)
// var twoSum = function(numbers, target) {
//   let len = numbers.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i+1; j < len; j++) {
//       if(numbers[i] + numbers[j] == target) {
//         return [i+1, j+1];
//       }
//     }
//   }
// };

// 2. 双指针：时间复杂度：O(n)，空间复杂度：O(1)
var twoSum = function(numbers, target) {
  // 定义左右指针
  let left = 0,right = numbers.length -1;
  while(left < right) {
    if(numbers[left] + numbers[right] < target) {// 太小
      left++;
    }else if(numbers[left] + numbers[right] > target) {// 太大
      right--;
    }else {
      return [left+1, right+1];
    }
  }
}

