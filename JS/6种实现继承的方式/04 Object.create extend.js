// 原型式继承
let person = {
  name: 'person',
  color: ['red', 'blue', 'green'],
  getName: function() {
    return this.name;
  }
}

var instance1 = Object.create(person);
instance1.name  = 'Tom';
instance1.color.push('black');

var instance2 = Object.create(person);

// Object.create实质是对原型进行浅拷贝，多个实例还是共享了原型
console.log(instance1.name);
console.log(instance1.color);
console.log(instance2.color);
console.log(instance1.name === instance1.getName())