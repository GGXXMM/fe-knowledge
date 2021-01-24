// 1. 递归
var arr = [1, 2, [3, [4, 5]]];
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// 2. reduce
function flatten(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}

// 3. toString将数组转换为字符串，再转回数组
function flatten(arr) {
  return arr
    .toString()
    .split(",")
    .map((item) => +item);
}

// 4. es6扩展运算符...
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 5. underscore源码实现
/**
 * 数组扁平化
 * @param {Array} input 要处理的数组
 * @param {Boolean} shallow 是否只扁平一层
 * @param {Boolean} strict 是否严格处理元素，下面有解释
 * @param {*} output 这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/745e9b7314064e66a7257f9b361030e6055980b8/underscore.js#L1015
 */
function flatten(input, shallow, strict, output){
  // 递归使用的时候会用到output
  output = output || [];
  var idx = output.length;

  for (var i = 0, len = input.length; i < len; i++) {

      var value = input[i];
      // 如果是数组，就进行处理
      if (Array.isArray(value)) {
          // 如果是只扁平一层，遍历该数组，依此填入 output
          if (shallow) {
              var j = 0, length = value.length;
              while (j < length) output[idx++] = value[j++];
          }
          // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
          else {
              flatten(value, shallow, strict, output);
              idx = output.length;
          }
      }
      // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
      else if (!strict){
          output[idx++] = value;
      }
  }

  return output;
}

console.log(flatten(arr)); // [1,2,3,4,5]
