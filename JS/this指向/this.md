# 理解this
> 我们要从 ECMASciript5 规范开始讲起。
> 英文版：http://es5.github.io/#x15.1
> 中文版：http://yanhaijing.com/es5/#115

this总是指向调用方法所在的对象。this指向只与所在方法调用位置有关，与方法声明位置无关。

# this的绑定规则
### 1、默认绑定
```
function foo() {
  console.log(this.a) // 输出a的值2
}

var a = 2;
foo();
// foo()调用时，相当于window.foo()调用，this默认就指向了全局的window对象
```
### 2、隐式绑定
```
function foo() {
  console.log(this.a);
}
let obj1 = {
  a: 1,
  foo,
};
let obj2 = {
  a: 2,
  foo,
}

obj1.foo();   // 输出 1
obj2.foo();   // 输出 2

// 函数被调用时，this指向调用函数所在的对象
// obj1.foo()调用，this指向obj1；obj2.foo()调用，this指向obj2
```
### 3、显示绑定：使用call、apply、bind
```
function foo() {
  console.log(this.a);  // 输出 1
  bar.apply({a: 2}, arguments);
}

function bar(b) {
  console.log(this.a + b);  // 输出 5
}

var a = 1;
foo(3);

// foo()调用，this绑定采用默认绑定规则
// bar函数调用了apply()，把this绑定到{a: 2}对象
```
### 4、new绑定
```
function Student(name){
    this.name = name;
    console.log(this); // {name: '若川'}
}
var result = new Student('若川');
```
使用new操作符调用函数，会自动执行以下几个步骤：
1）创建一个全新的对象；
2）这个新对象会链接函数的原型prototype
3）这个新对象会绑定到函数调用的this
4）如果函数没有返回其他对象，那么new表达式的函数调用会自动返回这个新对象

# this的使用场景
1）普通函数调用
2）构造函数调用
3）对象方法
4）构造函数prototype属性
5）call/apply/bind调用
6）DOM事件处理
8）es6箭头函数中的this