/**
 * 偏函数：将n个参数转换成固定x个参数的函数，剩余（n-x）个参数在调用全部传入
 * @param {Function} fn 
 * @param  {any} args 
 * @returns 
 */
function partial(fn, ...args) {
  return function(...arg) {
    return fn(...args, ...arg)
  }
}

// Test
function add(a, b, c) {
  return a + b + c
}
let partialAdd = partial(add, 1)
console.log(partialAdd(2, 3))
