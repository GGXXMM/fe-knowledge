const imgList = [...document.querySelectorAll('img')];
const len = imgList.length;

const lazyLoad = (function(){
  let count = 0;
  return function() {
    let deleteIndexList = [];
    imgList.forEach((img,index)=> {
      let rec = img.getBoundingClientRect();
      if(rec.top < window.innerHeight) {// 元素出现在可视区（window.innerHeight：可视窗口的高度）
        img.src = img.dataset.src; // 将data-src设置成图片src
        deleteIndexList.push(index);
        count++;
        if(count === len) {// 当图片都加载完，移除滚动监听事件
          document.removeEventListener('scroll', lazyLoad)
        }
      }
    })
    imgList = imgList.filter((img, index)=> !deleteIndexList.includes(index))
  }
})()

// 节流函数
const throttle = function(fn, timing = 500) {
  let prev = 0
  return function() {
    let now = +new Date();
    if(now - prev > timing) {
      prev = now;
      fn.apply(this, arguments)
    }
  }
}
// 滚动加上节流控制
const _throttle = throttle(lazyLoad)
document.addEventListener('scroll', _throttle)