// 借助构造函数(借助call)
function Parent() {
  this.name = 'parent';
}

Parent.prototype.getName = function() {
  return this.name;
}

function Child() {
  Parent.call(this)
}

var instance = new Child();
// 只能继承父类属性，父类原型上的属性方法无法继承
console.log(instance.name)
console.log(instance.getName())
