### new操作符究竟做了些什么事情：
- 它创建了一个全新对象
- new创建的对象通过`__proto__`链接到函数的原型
- this指向新创建的对象
- 如果函数没有返回对象类型Object，那么new表达式的函数调用会自动返回这个新对象

### 模拟new操作符
```
function myNew() {
  // 1. 创建一个新对象
  let obj = {};
  // 2. 创建的对象通过__proto__链接到函数的原型（继承函数的属性及方法）
  let fn = [].shift.call(arguments);
  obj.__proto__ = fn.prototype;
  // 3. this指向当前新对象
  let result = fn.apply(obj, arguments);
  // 4. 返回对象（若函数没有返回对象类型，那么自动返回new新创建的对象）
  return result instanceof Object ? result : obj;
}
```