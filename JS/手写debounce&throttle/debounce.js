// 防抖：动作发生n秒后触发（延后执行），如果n秒内再次触发动作，重新计时
function debounce(fn, timing=500) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, timing)
  }
}