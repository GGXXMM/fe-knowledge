/**
 * 手写简版EventEmitter
 */
class EventEmitter{
  constructor() {
    this._events = {}
  }
  $on(event, fn) {
    if(this._events[event]){
      this._events[event].push(fn)
    }else{
      this._events[event] = [fn]
    }
  }
  $off(event, fn) {
    let task = this._events[event]
    if(task) {
      const index = task.findIndex(f => f === fn || f.callback === fn)
      if(index>=0){
        task.splice(index, 1)
      }
    }
  }
  $emit(event, ...args) {
    if(this._events[event]){
      // 创建副本
      let tasks = this._events[event].slice()
      for(let fn of tasks){
        fn(...args)
      }
    }
  }
}

// Test
let eventBus = new EventEmitter()
let fn1 = function(name, age) {
	console.log(`${name} ${age}`)
}
let fn2 = function(name, age) {
	console.log(`hello, ${name} ${age}`)
}
eventBus.$on('aaa', fn1)
eventBus.$on('aaa', fn2)
eventBus.$emit('aaa', '布兰', 12)
// '布兰 12'
// 'hello, 布兰 12'