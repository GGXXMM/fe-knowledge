/**
 * 手写 forEach
 * 功能：
 * 1. 遍历数组
 * 2. 遍历过程中可修改原数组
 * @param {Function} callbackFn 参数：element当前正处理元素、index正处理元素的下标、array 调用forEach 数组本身
 * @param {*} thisArg 传递给 callbackFn 的 this
 */
Array.prototype.forEach2 = function(callbackFn, thisArg) {
  // 异常判断
  if(this === null) {
    throw new TypeError('Cannot read properties of null（reading forEach）')
  }
  if(typeof callbackFn !== 'function') {
    throw new TypeError(`${typeof callbackFn} ${callbackFn} is not a function`)
  }
  // 执行循环
  let obj = Object(this);
  let len = obj.length;
  let k = 0;
  while(k < len) {
    callbackFn.call(thisArg, obj[k], k, obj)
    k++;
  }
}

// Test
var arr = [1, 2, 3, 4]
arr.forEach2((item, index, arr)=> {
  if(index == 2){
    arr[index] = 5
  }
})
console.log(arr)