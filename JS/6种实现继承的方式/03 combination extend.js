// 组合继承（使用原型链实现对原型属性和方法的继承，构造函数来实现对实例属性的继承）
function Parent(name) {
  this.name = name
  this.color = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function() {
  return this.name;
}

function Child(name){
  // 继承属性
  Parent.call(this, name)
}

// 继承原型方法
Child.prototype = new Parent()

// 解决了多个实例互不影响，也可以同时继承父类属性及其原型上的属性方法，但是Parent被调用了2次
var instance1 = new Child('Nicholas')
var instance2 = new Child('Alice')
instance1.color.push('black')
console.log(instance1.color)
console.log(instance2.color)
console.log(instance1.getName())