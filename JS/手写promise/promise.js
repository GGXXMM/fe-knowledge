/**
 * 实现promise基本功能
 * @class MyPromise
 */
// 1. 定义状态(3种)
const PENDING = 'peding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.resolvedHandlers = [];
    this.rejectedHandlers = [];
    fn(this.resolve.bind(this), this.reject.bind(this))
    return this;
  }
  // resolve函数
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
  // reject函数
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

  then(...handlers) {
    this.resolvedHandlers = [...this.resolvedHandlers, ...handlers];
    return this;
  }

  catch(...handlers) {
    this.rejectedHandlers = [...this.rejectedHandlers, ...handlers];
    return this;
  }
}