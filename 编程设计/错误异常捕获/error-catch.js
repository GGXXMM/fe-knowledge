/**
 * 前端错误分类：
 * 1、即时运行错误
 * 2、资源加载错误
 */
// 1.1 捕获语法错误/类型错误/引用错误、运行时错误（同步、异步错误）
window.onerror = function(msg, url, row, col, error){
  console.log('捕获脚本异常 start====')
  console.log('msg',msg);
  console.log('url',url);
  console.log('row',row);
  console.log('col',col);
  console.log('error',error);
  console.log('捕获脚本异常 end====')
}

// 2.1 捕获网络错误
window.addEventListener('error', function(error){
  console.log('网络异常===', error)
})


// 2.2 捕获Promise异常
window.addEventListener('unhandledrejection', function(error){
  console.log('promise error', error)
})

// 2.3 捕获Vue错误，直接扔出给onerror处理
// Vue.config.errorHandler = function (err, vm, info) {
//   setTimeout(() => {
//     throw err
//   })
// }