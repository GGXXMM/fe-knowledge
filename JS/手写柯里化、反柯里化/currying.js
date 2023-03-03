/**
 *
 * 手写currying柯里化函数：将接收多个参数的函数转换成只接受一个单一参数
 * @param {*} fn
 * @param {*} args
 * @return {*} 
 */
function currying(fn, args) {
  var len = fn.length;
  var args = args || [];

  return function(){
    var newArgs = args.concat([].slice.call(arguments));
    if(newArgs.length < len) {
      return currying.call(this, fn, newArgs);
    }
    return fn.apply(this, newArgs)
  }
}

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = currying(multiFn);

console.log(multi(2)(3)(4))