/** 变量提升：var 声明的变量，会提升到当前作用域的顶部，但赋值不会提升 */
console.log(a) // undefined
var a = 10;
console.log(a) // 10