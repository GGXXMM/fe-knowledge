/** 发布-订阅模式 */
class EventCenter{
  constructor() {
    // 事件中心
    this._eventList = {}
    console.log('Publisher created')
  }
  // 添加订阅者
  /**
   * 
   * @param {String} key 事件名
   * @param {Funciton} fn 回调函数
   */
  listen(key, fn) {
    console.log('Publisher.listen')
    // 初始化
    if(!this._eventList[key]) {
      this._eventList[key] = []
    }
    this._eventList[key].push(fn)
  }
  // 取消订阅
  remove(key, fn) {
    console.log('Publisher.remove')
    let fns = this._eventList[key]
    if(!fns) return false;
    // 1. 如果仅传事件名key，未传入回调函数
    if(!fn) {
      // 移除该事件的监听
      fns && (this._eventList[key] = null)
    }
    // 2. 否则遍历fns，取消订阅fn事件回调函数
    fns.forEach((_fn, i) => {
      if(_fn === fn) {
        fns.splice(i,1)
      }
    });
  }
  // 执行
  trigger(key, ...args) {
    console.log('Publisher.trigger')
    if(this._eventList[key]) {
      let tasks = this._eventList[key].slice()
      for(let fn of tasks) {
        fn(...args)
      }
    }
  }
}

let evt = new EventCenter();
// 多个订阅者监听
evt.listen('eventA', function(name){
  console.log(`订阅者：${name}`)
})
// 发布执行
evt.trigger('eventA', '张三')
evt.trigger('eventA', '李四')
// 移除事件监听
evt.remove('eventA')