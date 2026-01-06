/*
 * @param {Array} 给定一个数组，比如[1,2,3,4,5]
 * @return {Number} 数组累加和
 */
// 1. for 循环暴力求解
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2. for...of 循环（简洁版）
function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// 3. reduce
function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum([1, 2, 3, 4, 5])); // 15