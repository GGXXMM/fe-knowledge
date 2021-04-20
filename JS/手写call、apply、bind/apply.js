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
  console.log(this.value);
}

bar.myApply(foo, ['black', '18']) // black 18 1