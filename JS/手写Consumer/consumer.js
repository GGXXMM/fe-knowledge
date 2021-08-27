/**
 * 异步消耗（同步改造异步）
 * @param {*} fn
 * @param {*} time
 * @return {*} 
 */
function consumer(fn, time) {
  let task = [],timer;
  return function(...args) {
    task.push(fn.bind(this, ...args));
    if(timer == null) {
      timer = setInterval(()=> {
        task.shift().call(this);
        if(task.length <= 0) {
          clearInterval(timer);
          timer = null;
        }
      }, time)
    }
  }
}
// 异步累加（1+2+3+...+10)
function add(ref, x){
  const v = ref.value + x;
  console.log(`${ref.value} + ${x} = ${v}`);
  ref.value = v;
  return ref;
}
let consumerAdd = consumer(add, 1000);

const ref = {value: 0};
for(let i = 0; i < 10; i++){
  consumerAdd(ref, i);
}

// 频繁点击，异步慢慢执行
btn.onclick = consumer((evt)=>{
  let t = parseInt(count.innerHTML.slice(1)) + 1;
  count.innerHTML = `+${t}`;
  count.className = 'hit';
  let r = t * 7 % 256,
      g = t * 17 % 128,
      b = t * 31 % 128;
  
  count.style.color = `rgb(${r},${g},${b})`.trim();
  setTimeout(()=>{
    count.className = 'hide';
  }, 500);
}, 800)
