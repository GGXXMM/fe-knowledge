/**
 * 实现JSON.stringify
 * @param {String/Number/Boolean/Null/Object} data
 */
function stringify(data) {
  let type = typeof data;

  if(data === null) {
    return 'null';
  }else if(type === 'number') {// NaN/Infinity/-Infinity返回'null'
    // isFinite用于检测参数是否是无穷大(false:参数是 NaN，正无穷大或者负无穷大)
    return isFinite(data) ? data.toString() : 'null';
  }else if(type === 'boolean') {
    return data.toString();
  }else if(type === 'string') {
    return '"' + data + '"';
  }else if(type === 'object') {
    if(data instanceof Array) {// 数组
      let res = '[';
      for (var i = 0; i < data.length; i++){
        res += (i ? ', ' : '') + stringify(data[i]);
      }  
      return res+']';
    }else if(Object.prototype.toString.call(data) === '[object Object]') {// 对象
      let tmp = [];
      for (let key in data) {
        if (data.hasOwnProperty(key)) {// 判断对象自身属性
          tmp.push(stringify(key)+':'+stringify(data[key]));
        }
      }
      return '{'+tmp.join()+'}';
    }
  }else if(type === 'function' || type=== 'undefined' || type === 'symbol') {
    return undefined;
  }
}