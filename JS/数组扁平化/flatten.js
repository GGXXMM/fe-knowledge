// 1. 递归
var arr = [1,2,[3,[4,5]]];
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          result = result.concat(flatten(arr[i]))
      }
      else {
          result.push(arr[i])
      }
  }
  return result;
}

// 2. reduce
function flatten(arr) {
  return arr.reduce((prev, next)=>{
    return prev.concat(Array.isArray(next)? flatten(next) : next);
  }, [])
}

// 3. toString将数组转换为字符串，再转回数组
function flatten(arr) {
  return arr.toString().split(',').map(item => +item);
}

// 4. es6扩展运算符...
function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr;
}

// 5. underscore

console.log(flatten(arr));// [1,2,3,4,5]