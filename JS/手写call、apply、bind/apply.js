/**
 * 实现 apply：改变当前函数 this 指向
 * @param {Object} context 绑定对象
 * @param {Array} argArr 传递给调用函数的参数，参数格式：数组
 * @returns 
 */
Function.prototype.myApply = function(context = window, argArr){
  context.fn = this;

  let result = context.fn(...argArr);
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
  // this指向调用对象 context，巧妙地修改了this指向
  console.log(this.value);
}

bar.myApply(foo, ['black', '18']) // black 18 1