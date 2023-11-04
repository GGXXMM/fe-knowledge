/**
 * 手写 filter
 * 功能：
 * 1. 遍历数组，并返回满足条件的新数组；未过滤到符合条件的返回[]
 * 2. 遍历后原数组不变
 * @param {Function} callbackFn 参数：element、index、array
 * @param {*} thisArg 传递给 callbackFn 的 this
 */
Array.prototype.filter2 = function(callbackFn, thisArg) {
  // 异常判断
  if(this === null) {
    throw new TypeError('Cannot read properties of null（reading forEach）')
  }
  if(typeof callbackFn !== 'function') {
    throw new TypeError(`${typeof callbackFn} ${callbackFn} is not a function`)
  }
  // 遍历过滤数据
  let obj = Object(this)
  let len = obj.length
  let k = 0
  let res = []
  while(k < len) {
    if(callbackFn.call(thisArg, obj[k], k, obj)) {
      res.push(obj[k])
    }
    k++
  }
  return res
}

// Test
var arr = [1, 2, 3]
var newArr = arr.filter2((item, index)=> {
  return item%2 == 0;
})
console.log('newArr:', newArr)
console.log('arr:', arr)