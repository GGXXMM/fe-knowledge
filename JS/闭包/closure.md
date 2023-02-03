# 概念
闭包是，有权访问另一个函数作用域的变量的函数。简单理解为，function嵌套function。
# 闭包的作用
1）外部读取函数内部的变量

2）将闭包内的函数/变量传递出去，提供外部使用，让这些变量始终保持在内存（不能被垃圾回收，容易引起内存泄露）

# 闭包实际应用
1）封装私有变量/方法
```
function People(num) { // 构造器
  var age = num;
  this.getAge = function() {
    return age;
  };
  this.addAge = function() {
    age++;
  };
}
var lionel = new People(23); // new方法会固化this为lionel哦
console.log(lionel.age);      // undefined
```
如下图，lionel中并不存在age属性，age是Person函数的私有变量。getAge和addAge中,我们可以看到他们的作用域中都包含一个People的闭包。
![image](https://user-images.githubusercontent.com/13798469/62421081-b94f2200-b6ce-11e9-887b-0811513c56a7.png)

2）记录循环的每个i变量：
```
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
```
3）立即函数：
```
function get(){
   console.log('getdata');
}
(function(){
  return get();
})()
```
4）封装js类库
```
// 下方的代码展示了,为什么jquery库中,它可以放心的用jquery而不担心这个变量被替换
(function(){
  var jQuery = window.jQuery = function() {
    // Initialize
  };
  // ...
})()
```

> 参考： 
> https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html
> https://github.com/mqyqingfeng/Blog/issues/9