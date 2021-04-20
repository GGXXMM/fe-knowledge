// 手写bind
Function.prototype.myBind = function(context = window, ...args) {
  if (typeof this !== "function") {
    throw new Error("this must be a function");
  }
  context.fn = this;

  return function(..._args) {
    args = args.concat(_args);
    context.fn(...args);
    delete context.fn;
  }
}

// Test
var obj = {
  name: '张三',
  age: 18,
  myFun: function(from, to) {
    console.log(this.name + ', 年龄：'+ this.age + '来自'+ from + '，将去往'+to)
  }
}

var db = {
  name: '李四',
  age: 20
}

obj.myFun.myBind(db,'成都','上海')(); 