function myNew() {
  // 1. 创建一个新对象
  let obj = {};
  // 2. 创建的对象通过__proto__链接到函数的原型（继承函数的属性及方法）
  let fn = [].shift.call(arguments);// [].shift.call()：删除数组/类数组对象第一个元素并返回
  obj.__proto__ = fn.prototype;
  // 3. this指向当前新对象
  let result = fn.apply(obj, arguments);
  // 4. 返回对象（若函数没有返回对象类型，那么自动返回new新创建的对象）
  return result instanceof Object ? result : obj;
}

// Test
function person(name, age) {
  this.name = name
  this.age = age
}
let p = myNew(person, '布兰', 12)
console.log(p)  // { name: '布兰', age: 12 }
