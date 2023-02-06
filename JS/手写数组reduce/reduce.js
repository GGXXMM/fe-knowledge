/**
 *
 * reduce原理：对数组里的每一项“叠加加工"，执行callback，最终产生一个结果
 * @param {*} callback(previousValue上一次返回值, currentValue正在处理的元素, currentIndex数组中的索引, array调用方法的数组)
 * @param {*} initalValue 第一次调用callback的初始参数
 */
Array.prototype.reduce = Array.prototype.reduce || function reduce(callback, initalValue) {
  if(!Array.isArray(this)) throw new TypeError('this is not a array')
  if(typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

  var arr = this
  var base = typeof initalValue === 'undefined' ? arr[0] : initalValue
  var startIndex = typeof initalValue === 'undefined' ? 1: 0
  for (let i = startIndex; i < arr.length; i++) {
    var cur = arr[i]
    base = callback(base, cur, i, arr)
  }
  return base
}