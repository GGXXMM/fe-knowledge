/** pipe 函数：函数组合（从左到右执行） */
// let funcs = [fn1, fn2, fn3, fn4]
// let pipeFunc = pipe(...funcs)
// 相当于
// fn4(fn3(fn2(fn1(args))))

// pipe函数实现
// 1、递归实现
// const pipe = function(...funcs) {
//   const len = funcs.length;
//   let index = 0;
//   let result; // 保留每次函数执行结果
//   return function fn(...args) {
//     // 递归终止条件
//     if (index >= len) {
//       return result;
//     }
//     result = funcs[index].apply(this, args);
//     index++;
//     // 继续递归下探
//     return fn.call(null, result);
//   }
// }

// 2、利用 reduce 实现
const pipe = function(...funcs) {
  return function(arg) {
    return funcs.reduce((prev, fn) => fn(prev), arg)
  }
}

// 调用执行
function add(num) {
    return num + 4;
}
function multiply(num) {
    return num * 3;
}
function division(num) {
    return num / 2;
}
const funcs = [add, multiply, division];
const pipeFunc = pipe(...funcs);
console.log(pipeFunc(10)); // 21