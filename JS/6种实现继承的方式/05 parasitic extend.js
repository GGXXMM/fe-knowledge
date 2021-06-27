// 寄生式继承
let person = {
  name: 'person',
  color: ['red', 'blue', 'green'],
  getName: function() {
    return this.name;
  }
}

function clone(obj) {
  var clone = Object.create(obj);
  clone.getColor = function(){
    return this.color;
  }
  return clone;
}

let instance = clone(person);
// 寄生式继承，在原型式继承基础上，添加了一些方法，其优缺点同原型式相同
console.log(instance.getName());
console.log(instance.getColor());
