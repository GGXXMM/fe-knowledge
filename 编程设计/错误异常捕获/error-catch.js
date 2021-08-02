// 1、捕获语法/引用错误、运行时错误（同步、异步错误）
window.onerror = function(msg, url, row, col, error){
  console.log('捕获语法错误、运行时错误 start====')
  console.log('msg',msg);
  console.log('url',url);
  console.log('row',row);
  console.log('col',col);
  console.log('error',error);
  console.log('捕获语法错误、运行时错误 end====')
}

// 2、捕获网络错误
window.addEventListener('error', function(error){
  console.log('network error', error)
})


// 3、捕获Promise异常
window.addEventListener('unhandledrejection', function(error){
  console.log('promise error', error)
})

