/** 变量提升：函数名和变量名相同 */
// 优先级：函数声明 > 变量声明
console.log(num);
var num = 30;
function num() {
  console.log('num 函数');
}
console.log(num);