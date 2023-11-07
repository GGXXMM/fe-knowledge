/**
 * 实现如下简单异步队列Queue，分别在 1,3,4 秒后打印出 “1”, “2”, “3”
 */
// 1. setTimeout
// const task = (timer, callback) => {
//   setTimeout(()=> {
//     callback && callback()
//   }, timer)
// }
// task(1000, ()=> {
//   console.log(1)
//   task(3000, ()=> {
//     console.log(2)
//     task(4000, ()=> {
//       console.log(3)
//     })
//   })
// })

// 2. promise
const task = (timer) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      if(timer === 1000) {
        console.log(1)
      }else if(timer === 3000) {
        console.log(2)
      }else if(timer === 4000) {
        console.log(3)
      }
      resolve()
    }, timer)
  })
}
const taskRuner = ()=> {
  task(1000)
    .then(() => task(3000))
    .then(() => task(4000))
}
taskRuner();

// 3. async/await
// const taskRuner = async () => {
//   await task(1000)
//   await task(3000)
//   await task(4000)
// }
// taskRuner()
