/**
 * 浅拷贝：仅拷贝第一层
 * @param {Object/Array} data 
 */
function shallowCopy(data) {
  let newObj = Array.isArray(data) ? [] : {};
  for(let key in data) {
    if(data.hasOwnProperty(key)) {
      newObj[key] = data[key]
    }
  }
  return newObj;
}
// Test
let obj1 = {
  a: 1,
  b: {
    c: 2
  }
}
let obj2 = shallowCopy(obj1);
obj2.a = 3;
obj2.b.c = 4;

console.log(obj2)// {a: 3, b:{c:4}}
console.log(obj1)// {a: 1, b:{c:4}}