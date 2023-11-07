/** object -> 原始类型 */
var obj = {
  valueOf() {
    return 1
  },
  toString() {
    return 'string'
  },
  // [Symbol.toPrimitive](hint) {
  //   if(hint === 'number') {
  //     return 3
  //   }
  //   if(hint === 'string') {
  //     return 'toPrimitive'
  //   } 
  //   return 'default'
  // }
}
/** Symbol.toPrimitive存在（该优先级最高） */ 
/** Symbol.toPrimitive不存在： */
console.log(+obj)// 倾向转number，调valueOf
console.log(`${obj}`)// 倾向转字符串，调toString
console.log(obj + {})// 默认default，优先调valueOf，再调toString