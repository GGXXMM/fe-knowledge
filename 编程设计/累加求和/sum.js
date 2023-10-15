/**
 * 累加求和
 * 输入：n = 4
 * 输出：1+2+3+4 = 10
 * @param {*} n 
 * @returns 
 */
// 1.递归
function summation(n) {
  if(n === 1) return 1;
  return n + summation(n-1);
}

// 2.for循环
function summation(n) {
  let sum = 0;
  for(let i = 1;i<=n;i++) {
    sum += i;
  }
  return sum;
}

// 3.reduce
// function summation(n) {
//   let arr = [];
//   for(let i = 1;i<=n;i++) {
//     arr.push(i);
//   }
//   let sum = arr.reduce((prev, cur) =>  prev + cur, 0)
//   return sum;
// }

console.log(summation(4))