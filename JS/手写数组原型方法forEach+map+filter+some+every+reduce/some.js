/**
 * 手写 some
 * 功能：至少有一个元素满足条件，就返回true；否则返回 false
 * @param {Function} callbackFn 参数：element、index、array
 * @param {*} thisArg 传递给 callbackFn 的 this
 */
Array.prototype.some2 = function(callbackFn, thisArg) {
  // 异常判断
  if(this === null) {
    throw new TypeError('Cannot read properties of null（reading forEach）')
  }
  if(typeof callbackFn !== 'function') {
    throw new TypeError(`${typeof callbackFn} ${callbackFn} is not a function`)
  }
  // 遍历判断
  let obj = Object(this)
  let len = obj.length
  let k = 0
  while(k < len) {
    if(callbackFn.call(thisArg, obj[k], k, obj)) {
      return true;
    }
    k++;
  }
  return false;
}

// Test
var arr = [1,2,3]
console.log(arr.some2((item) => item % 2 === 0))