/* SyntaxError语法错误（预解析时） */
// // 1）变量名不符合规范
// var 1a = 1
// // 2）给关键字赋值
// function = 5
// // 3）let/const重复声明变量
// let str = 'zhangsan';
// const str = false;

/* TypeError类型错误 */
// // 1）尝试修改无法修改的值
// const str1 = 'zhangsan';
// str1 = false;

// // 2）尝试以不恰当的方法使用一个值
// // i. 获取null/undefined的length
// const a = undefined;
// a.length;

// // ii.null/undefined当做数组遍历
// var arr;
// arr = arr.map(item => {
//   return +item;
// });

/* ReferenceError引用错误 */
// obj.getName();

/* RangeError 范围异常 */
// function check(n){
//   if( !(n >= -500 && n <= 500) )
//   {
//     throw new RangeError("The argument must be between -500 and 500.")
//   }
// }
// try{
//   check(2000)
// }catch(error){
//   if (error instanceof RangeError){
//     // Handle the error
//     console.log(error)
//   }
// }

/** URIError URI处理错误 */
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
}

/* 异步错误 */
// try {
//   setTimeout(() => {
//     error        // 异步错误
//   },100)
// } catch(e) {
//   console.log('我感知不到错误');
// }

/* Promise错误 */
new Promise((resolve, reject) => {
  reject('promise error');
});