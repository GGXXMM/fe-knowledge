/**
 *
 * promiseA+规范
 * @param {*} executor
 */
function Promise(fn) {
  var self = this;

  self.status = 'pending'   // Promise当前的状态
  self.data = null          // Promise成功的值
  self.reason = null        // Promise失败的原因
  self.onResolvedCallback = [] // Promise resolve时的回调函数集
  self.onRejectedCallback = [] // Promise reject时的回调函数集

  // resolve函数：
  // 1. 将 pending 状态改为 fulfilled
  // 2. 将成功的值作为参数传递出去
  function resolve(value) {
    setTimeout(()=> {
      if (self.status === 'pending') {
        self.status = 'fulfilled'
        self.data = value
        for(var i = 0; i < self.onResolvedCallback.length; i++) {
          self.onResolvedCallback[i](value)
        }
      }
    },0)
  }

  // reject函数：
  // 1. 将 pending 状态改为 rejected
  // 2. 将报错信息作为参数传递出去
  function reject(reason) {
    setTimeout(()=> {
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.reason = reason
        for(var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason)
        }
      }
    },0)
  }

  try {
    fn(resolve, reject) // 执行fn并传入相应的参数
  } catch (error) {
    reject(error)
  }
}

// resolvePromise函数：统一处理promise返回/普通值返回
function resolvePromise(promise2, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }
  if (x instanceof Promise) {
    if (x.status === 'pending') { 
      x.then(function(v) {
        resolvePromise(promise2, v, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
    return
  }
  // x可能是对象、函数
  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve, reject)
        }, function rj(r) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    // x是普通的值
    resolve(x)
  }
}

/**
 * then函数：
 * 1. 返回一个新的promise对象，可以链式调用
 * 2. 为promise实例添加改变状态的回调函数
 * @param {*} onResolved fulfilled状态的回调函数
 * @param {*} onRejected rejected状态的回调函数
 */
Promise.prototype.then = function(onResolved, onRejected) {
  var self = this;
  var promise2;

  if(self.status == 'fulfilled') {
    return promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() { // 异步执行onResolved
        try {
          var x = onResolved(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }
  if(self.status == 'rejected') {
    return promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() { // 异步执行onRejected
        try {
          var x = onRejected(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }
  if(self.status == 'pending') {
    return promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    })
  }
}

Promise.prototype.catch = function(onRejected) {
  // 实质调用then函数
  return this.then(null, onRejected)
}

/**
 * Promise.all
 * 1. 将多个Promise（p1,p2,p3...) 实例，包装成一个新的Promise (p) 返回
 * 2. p的状态由 p1、p2、p3... 决定，只有都成功，状态才为 fulfilled，返回成功值组成的数组
 * 3. p1、p2、p3... 其中之一返回失败，p 的状态就为失败，第 1 个失败原因作为返回值
 */
Promise.all = function(items) {
  return new Promise((resolve, reject)=> {
    let res = [];
    let num = 0;  // 记录都返回成功的数字
    let len = items.length;
    for (let i = 0; i < len; i++) {
      items[i].then(function(data){
        res[i]=data;
        if (++num === len) {
          resolve(res);
        }
      }, reject)
    }
  })
}

/**
 * Promise.race
 * 1. 将多个Promise（p1,p2,p3...) 实例，包装成一个新的Promise (p) 返回
 * 2. p1,p2,p3... 哪个执行快，就返回哪个，无论成功/失败
 */
Promise.race = function(items) {
  return new Promise((resolve, reject)=>{
    for (let i = 0; i < items.length; i++) {
      items[i].then(resolve, reject);
    }
  })
}

// Test
const p = new Promise((resolve, reject) => {
  resolve('resolve')
}).then(res => {
  console.log('then: ', res)
})