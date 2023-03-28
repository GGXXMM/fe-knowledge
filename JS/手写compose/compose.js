// compose 函数特征：与 pipe 类似，只是执行顺序相反”从右向左“
// let funcs = [fn1, fn2, fn3, fn4]
// let composeFunc = compose(...funcs)
// // 相当于
// fn1(fn2(fn3(fn4(args))))

// compose函数实现
/** 1、递归实现 */
const compose = function(...args) {
  let length = args.length
  let count = length-1
  let result
  return function f1(...arg1) {
    result = args[count].apply(this, arg1)
    if(count <= 0) {
      count = length - 1
      return result
    }
    count--
    return f1.call(null, result)
  }
}
/**2、将函数数组反转，利用reduce实现（抖机灵） */
const reduceFunc = (f, g) => g.call(this, f.apply(this, arg))
const compose = (...args) => args.reverse().reduce(reduceFunc, args.shift())

/**3、reduce实现继续拓展，promise执行 */
const compose = function(...args) {
  let init = args.pop()
  return (...arg) => 
    args.reverse().reduce((sequence, func) => 
      sequence.then(result => func.call(null, result)), 
      Promise.resolve(init.apply(null, arg)))
}

/**4、lodash实现 */
const compose = function(funcs) {
  const length = funcs.length;
  let index = length;
  // 判断funcs数组元素是否是函数
  while(index--) {
    if(typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function')
    }
  }
  return function(...args) {
    let index = 0;
    let result = length ? funcs.reverse()[index].apply(this, args) : args[0];
    while(++index < length) {
      result = funcs[index].apply(this, result);
    }
    return result;
  }
}

/**5、redux实现 */
function compose(...funcs) {
  if(funcs.length === 0) {
    return arg => arg
  }
  if(funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a,b) => (...args) => a(b(...args)))
}