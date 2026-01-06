/**
 * 创建一个事件总线 eventBus
 * (发布 - 订阅模式)
 */
class EventBus {
  constructor() {
    this.events = {} // 存储事件和对应的回调函数（对象方便查找）
    console.log('eventBus created')
  }
  // 添加订阅事件
  on(eventName, fn) {
    console.log('eventBus.on')
    if(!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(fn)
  }
  // 取消订阅事件
  off(eventName, fn) {
    console.log('eventBus.off')
    let fns = this.events[eventName]
    if(!fns) return false;
    // 1. 如果仅传事件名 key（移除 eventName 事件对应的所有回调函数）
    if(!fn) {
      fns && (this.events[eventName] = null)
    }
    // 2. 否则遍历 fns，取消订阅 fn 事件回调函数
    fns.forEach((_fn, i) => {
      if(_fn === fn) {
        fns.splice(i, 1)
      }
    })
  }
  // 触发事件执行
  emit(eventName, ...args) {
    console.log('eventBus.emit')
    if(this.events[eventName]) {
      let tasks = this.events[eventName].slice()
      for(let fn of tasks) {
        fn(...args)
      }
    }
  }
}

let evt = new EventBus();
// 多个订阅者监听
evt.on('eventA', function(name){
  console.log(`订阅者A：${name}`)
})
evt.on('eventB', function(name){
  console.log(`订阅者B：${name}`)
})
evt.emit('eventA', '张三') // 输出：订阅者A：张三
evt.emit('eventB', '李四') // 输出：订阅者B：李四