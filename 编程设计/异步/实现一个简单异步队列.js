/**
 * 实现如下简单异步队列Queue，分别在 1,3,4 秒后打印出 “1”, “2”, “3”
 */
class Queue{
  constructor(){
    this._event = []
  }
  task(time, callback) {
    this._event.push({time: time, fn: callback})
    return this;
  }
  start() {
    if(this._event.length === 0) {
      return;
    }
    let item = this._event.shift()
    setTimeout(()=> {
      item.fn()
      this.start()
    }, item.time)
  }
}

const q = new Queue();
q.task(1000, ()=>{
	console.log(1)
}).task(2000, ()=>{
	console.log(2)
}).task(1000, ()=>{
	console.log(3)
}).start()