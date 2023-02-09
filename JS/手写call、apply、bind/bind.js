// 借apply实现bind
/**1、初级版本：利用apply实现 */
Function.prototype.bind = function(context) {
  let self = this
  let argsArray = Array.prototype.slice.call(arguments)// 将类数组 argument 转换成数组
  return function() {
    self.apply(context, argsArray.slice(1))
  }
}
/**缺陷：存在预设参数丢失 */

/**2、借鉴柯里化，实现预设参数传递 */
Function.prototype.bind = function(context) {
  let self = this
  let args = Array.prototype.slice.call(arguments, 1)// 将类数组 argument 转换成数组，并截取第2位开始的参数
  return function() {// 预设参数
    let finalArgs = args.concat(Array.prototype.slice.call(arguments))
    return self.apply(context, finalArgs)
  }
}

/**3、完善版，实现搭配new关键词的构造函数 */
// 难点：new关键字，会让原来this指向失效，绑定在创建的实例上
Function.prototype.bind = function(context) {
  let self = this
  let args = Array.prototype.slice.call(arguments, 1)
  
  let bound = function() {
    let finalArgs = args.concat(Array.prototype.slice.call(arguments))
    // 作为构造函数，this指向实例，`this instanceof bound`返回为 true
    // 作为普通函数，this指向 window, `this instanceof bound`返回为 false
    return self.apply(this instanceof bound ? this : context, finalArgs)
  }
  // 返回函数的原型绑定为bind函数的原型
  bound.prototype = this.prototype
  return bound;
}

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