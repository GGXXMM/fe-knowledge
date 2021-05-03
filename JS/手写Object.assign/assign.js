/**
 * 手写Object.assign：浅拷贝对象
 * @param {*} target 目标对象
 * @param {*} source 源对象
 * @return {*} 
 */
function assign(target, source) {
  if(target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  let ret = Object(target);// 包装成对象
  for(var key in source) {
    if(source.hasOwnProperty(key)){
      ret[key] = source[key]
    }
  }
  return ret;
}

// Test
let obj = assign({}, {name: 'zhangsan'});
console.log(obj);// output: { name: 'zhangsan' }