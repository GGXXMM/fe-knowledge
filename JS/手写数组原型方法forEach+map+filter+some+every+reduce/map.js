/**
 * 手写 map
 * 功能：
 * 1. 遍历数组
 * 2. 遍历后返回新数组，原数组不变
 * @param {Function} callbackFn 参数：element、index、array
 * @param {*} thisArg 传递给 callbackFn 的 this
 */
Array.prototype.map2 = function(callbackFn, thisArg) {
  // 异常判断
  if(this === null) {
    throw new TypeError('Cannot read properties of null（reading forEach）')
  }
  if(typeof callbackFn !== 'function') {
    throw new TypeError(`${typeof callbackFn} ${callbackFn} is not a function`)
  }
  // 执行循环
  let obj = Object(this)
  let len = obj.length;
  let k = 0;
  let res = [];
  while(k < len) {
    res[k] = callbackFn.call(thisArg, obj[k], k, obj)
    k++;
  }
  return res;
}

// Test
var arr = [1, 2, 3, 4]
var newArr = arr.map2((item, index, arr)=> {
  return item = item * 2
})
console.log('newArr:', newArr)
console.log('arr:', arr)