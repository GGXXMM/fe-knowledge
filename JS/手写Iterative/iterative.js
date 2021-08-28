// 判断是否可迭代
const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
/**
 * 迭代器
 * @param {*} fn
 */
function iterative(fn) {
  return function(subject, ...rest) {
    if(isIterable(subject)) {
      const ret = [];
      for(let obj of subject) {
        ret.push(fn.apply(this, [obj, ...rest]));
      }
      return ret;
    }
    return fn.apply(this, [subject, ...rest]);
  }
}

const setColor = iterative((el,color) => {
  el.style.color = color;
})

const els = document.querySelectorAll('li:nth-child(2n+1)');
setColor(els, 'red')