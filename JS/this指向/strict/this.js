'use strict';

console.log(this)// {}，就是module.exports对象

function fn() {
  console.log(this)// undefined
}

(function(){
  console.log(this)// undefined
})()

fn()