function debounce(fn, timing=500) {
  let timer = null;
  return function() {
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this, arguments)
    }, timing)
  }
}