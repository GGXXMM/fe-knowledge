/**
 * 异步任务并发请求，且限制并发量
 * @param {number} limit 最大并发数
 */
function multiRequest(limit) {
  this.queue = []// 存储异步任务的队列
  this.limit = limit// 请求限制
  this.runing = false// 是否正在处理队列中的请求

  // 添加任务
  this.add = function(task){
    this.queue.push(task)
    if(this.queue.length > 0 && !this.runing){
      this.run(limit)
    }
  }
  // 执行任务（并发：使用Promise.all）
  this.run = function(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
      const task = this.queue.shift();
      task && arr.push(task());
    }
    if(arr.length > 0) {
      this.runing = true;
      Promise.all(arr).then(res => {
        console.log(res);
        this.run(count);
      })
    }else{
      this.runing = false;
    }
  }
}

// 模拟接口请求
function request(index){
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve(index)
    }, 2000)
  })
}

// Test
let p = new multiRequest(2);
p.add(() => request(1))
p.add(() => request(2))
p.add(() => request(3))
p.add(() => request(4))
