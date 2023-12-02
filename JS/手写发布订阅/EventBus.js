/**
 * 手写vue事件总线
 */
function EventBus() {
  // 全局定义一个_events属性，存储事件
  this._events = Object.create(null)
}

EventBus.prototype.$on = function(event, fn){
  const vm = this;
  // 判断event是数组还是字符串
  if(Array.isArray(event)) {
    for(let i =0;i<event.length;i++) {
      vm.$on(event[i], fn)
    }
  }else{
    ((vm._events[event]) || (vm._events[event] = [])).push(fn)
  }
}

EventBus.prototype.$emit = function(event) {
  const vm = this;
  let cbs = vm._events[event];
  if(_isString(event) && cbs) {
    // 获取传参
    const args = Array.from(arguments).slice(1);
    for(let i = 0;i < cbs.length;i++) {
      try {
        cbs[i].apply(vm, args);
      } catch(e) {
        new Error('error');
      }
    }
  }
  return vm
}

EventBus.prototype.$off = function(event, fn) {
  const vm = this;
  // 1.如果不传参，移除所有事件监听
  if(!arguments.length) {
    vm._events = Object.create(null);
    return vm
  }
  if(Array.isArray(event)) {
    for (let i = 0; i < event.length; i++) {
      vm.$off(event[i], fn)
    }
    return vm
  }
  const cbs = vm._events[event];
  if(!cbs) {
    return vm
  }
  // 2.如果只提供了事件，没有回调传入，则移除该事件的监听
  if(!fn) {
    vm._events[event] = null
    return vm
  }
  // 3.否则，遍历cbs，移除cbs中为fn的回调函数
  let cb;
  let i = cbs.length;
  while(i--) {
    cb = cbs[i]
    if(cb === fn || cb.fn === fn) {
      cbs.splice(i,1)
      break
    }
  }
  return vm
}

// 判断是否是函数
function _isFunction(fn) {
  return fn && Object.prototype.toString.call(fn) === '[object Function]';
}

// 判断是否为字符串
function _isString(str) {
  return str && (typeof str === 'string' || Object.prototype.toString.call(str) === '[object String]')
}