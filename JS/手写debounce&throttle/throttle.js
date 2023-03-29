// 节流：指定时间内只触发1次动作，若n秒内发生动作，无视动作。
function throttle(fn, timing) {
  // 上次执行fn的时间戳
  let previous = 0;
  return function() {
    let now = +new Date();
    if(now - previous > timing) {
      previous = now;
      fn.apply(this, arguments);
    }
  }
}