/**
 * 实现call：改变当前函数 this 指向
 * @param {Object} context 绑定对象
 * @param  {any} args 参数，格式：“,”分隔
 * @returns 
 */
Function.prototype.myCall = function(context = window, ...args) {
  context.fn = this;

  let result = context.fn(...args);
  delete context.fn;
  return result;
}

// Test
let foo = {
  value: 1
}
function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}

bar.myCall(foo, 'black', '18') // black 18 1