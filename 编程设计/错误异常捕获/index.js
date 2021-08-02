// SyntaxError语法错误
// const str = 'zhangsan';
// const str = false;

// TypeError类型错误
// const str = 'zhangsan';
// str = false;

// ReferenceError引用错误
// obj.getName();

// RangeError
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

// 异步错误
// try {
//   setTimeout(() => {
//     error        // 异步错误
//   },100)
// } catch(e) {
//   console.log('我感知不到错误');
// }

// Promise错误
new Promise((resolve, reject) => {
  reject('promise error');
});