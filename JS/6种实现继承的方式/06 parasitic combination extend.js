// 寄生式组合继承
function clone (parent, child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;

}

function Parent() {
  this.name = 'parent';
  this.color = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  return this.name;
}

function Child() {
  Parent.call(this);
  this.friends = 'child';
}

clone(Parent, Child);

Child.prototype.getFriends = function () {
  return this.friends;
}

let instance1 = new Child();
let instance2 = new Child();
instance2.color.push('black');

// 继承方式相对最优：多个实现互不影响，减少了构造的次数，减少了性能的开销
console.log(instance1.getName());
console.log(instance1.getFriends());
console.log(instance1.color)
console.log(instance2.color)

