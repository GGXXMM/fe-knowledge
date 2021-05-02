function throttle(fn, timing) {
  // 上次执行fn的时间戳
  let previous = 0;
  return function() {
    let now = +new Date();
    if(now - previous > timing) {
      previous = now;
      fn.apply(this, arguments)
    }
  }
}