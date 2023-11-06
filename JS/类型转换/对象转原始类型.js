/** object -> 原始类型 */
var obj = {
  valueOf() {
    return 1
  },
  toString() {
    return 'string'
  },
  // [Symbol.toPrimitive]() {
  //   return 3
  // }
}
// 优先调 Symbol.toPrimitive（该优先级最高）
console.log(+obj)// 倾向转number，调valueOf
console.log(`${obj}`)// 倾向转字符串，调toString
console.log(obj + {})// 默认default，先调valueOf，若无结果再调toString