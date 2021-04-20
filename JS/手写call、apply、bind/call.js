// 手写call
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