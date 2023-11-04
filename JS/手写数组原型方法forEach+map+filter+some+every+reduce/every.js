/**
 * 手写 every
 * 功能：所有元素都满足条件，则返回true；否则返回 false
 * @param {Function} callbackFn 
 * @param {*} thisArg 
 */
Array.prototype.every2 = function(callbackFn, thisArg) {
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
    if(!callbackFn.call(thisArg, obj[k], k, obj)) {
      return false;
    }
    k++;
  }
  return true;
}

// Test
var arr = [2,4,6]
console.log(arr.every2((item) => item % 2 === 0))