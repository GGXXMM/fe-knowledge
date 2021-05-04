/**
 * 实现promise基本功能
 * @class MyPromise
 */
// 1. 定义状态(3种)
const PENDING = 'peding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 实例化promise时，会立即执行，并返回当前promise对象
  constructor(fn) {
    this.state = PENDING;
    this.resolvedHandlers = [];
    this.rejectedHandlers = [];
    fn(this.resolve.bind(this), this.reject.bind(this))
    return this;
  }
  // resolve函数：
  // 1. 将 pending 状态改为 fulfilled
  // 2. 继续执行 then 函数
  resolve(value) {
    setTimeout(()=> {
      if(this.state === PENDING) {
        this.state = FULFILLED;
        const resolveHandler = this.resolvedHandlers.shift();
        if(!resolveHandler) return;
        const result = resolveHandler(value);
        if(result && result instanceof MyPromise) {
          result.then(...this.resolvedHandlers);
        }
      }
    }, 0)
  }
  // reject函数：
  // 1. 将 pending 状态改为 rejected
  // 2. 继续执行 catch 函数
  reject(error) {
    setTimeout(()=> {
      if(this.state === PENDING) {
        this.state = REJECTED;
        const rejecHandler = this.rejectedHandlers.shift();
        if(!rejecHandler) return;
        const result = rejecHandler(error);
        if(result && result instanceof MyPromise) {
          result.catch(...this.rejectedHandlers);
        }
      }
    }, 0)
  }
  // then方法：
  // 1. 添加状态改变的函数到 resolvedHandlers
  // 2. 继续可以链式调用 then：将该实例化对象 this 返回
  then(...handlers) {
    this.resolvedHandlers = [...this.resolvedHandlers, ...handlers];
    return this;
  }
  // catch方法：
  // 1. 添加状态改变的函数到 rejectedHandlers
  // 2. 继续可以链式调用 catch：将该实例化对象 this 返回
  catch(...handlers) {
    this.rejectedHandlers = [...this.rejectedHandlers, ...handlers];
    return this;
  }
}

// Test：
const p = new MyPromise(function (resolve, reject) {
  setTimeout(() => resolve(console.log('settimeout')), 1000);
});
