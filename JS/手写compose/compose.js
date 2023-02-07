// compose 函数特征：与 pipe 类似，只是执行顺序相反”从右向左“
// let funcs = [fn1, fn2, fn3, fn4]
// let composeFunc = compose(...funcs)
// // 相当于
// fn1(fn2(fn3(fn4(args))))

// compose函数实现（通过reduce）
function compose(...funcs) {
  if(funcs.length === 0) {
    return arg => arg
  }
  if(funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a,b) => (...args) => a(b(...args)))
}