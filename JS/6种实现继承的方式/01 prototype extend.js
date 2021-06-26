// 原型链继承
function Parent() {
  this.color = ['red', 'blue', 'green'];
}

function Child() {}

Child.prototype = new Parent();

var instance1 = new Child();
var instance2 = new Child();
instance1.color.push('black');

// 所有实例都共享了原型，属性改变会相互影响
console.log(instance1.color)
console.log(instance2.color)
