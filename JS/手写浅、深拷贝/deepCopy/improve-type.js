/**
 * 改进1：递归前增加引用类型校验
 * 缺陷：Date/RegExp类型的属性拷贝后是空对象{}、存在递归爆栈的问题
 */
// function deepCopy(data) {
//   if(typeof data !== 'object') return;

//   let newObj = Array.isArray(data) ? [] : {};
//   for(let key in data) {
//     if(data.hasOwnProperty(key)) {
//       if(typeof data[key] === 'object') {
//         newObj[key] = deepCopy(data[key])
//       }else{
//         newObj[key] = data[key]
//       }
//     }
//   }
//   return newObj;
// }

/**
 * 改进2：拷贝类型扩展
 * 缺陷：存在递归爆栈的问题
 * @param {Object/Array/Date/RegExp/Function/String/Number/Boolean/Undefined/Null/Symbol} data
 * @return
 */
function deepCopy(data) {
  let type = checkDataType(data);
  let cloneData = (type === 'array' ? [] : {});

  if(typeof data === 'object') {// 引用数据类型
    switch (type) {
      case 'object':
        for(let key in data) {
          cloneData[key] = deepCopy(data[key])
        }
        return cloneData;
      case 'array':
        data.forEach(item => {
          cloneData.push(deepCopy(item))
        })
        return cloneData;
      default:
        // 其他引用类型，包括Date/RegExp/Function
        return data;
    }
  }else {// 基础数据类型
    return data;
  }
}

function checkDataType(data) {
  let typeObj = {
    // 7种原始数据类型
    "[object String]": 'string',
    "[object Number]": 'number',
    "[object Boolean]": 'boolean',
    "[object Undefined]": 'undefined',
    "[object Null]": 'null',
    "[object Object]": 'object',
    "[object Symbol]": 'symbol',
    // 引用类型
    "[object Function]": 'function',
    "[object Array]": 'array',
    "[object Date]": 'date',
    "[object RegExp]": 'regexp',
  }

  let typeKey = Object.prototype.toString.call(data);
  return typeObj[typeKey];
}

// Test
function Obj() { 
  this.func = function () { alert(1) }; 
  this.obj = {a:1};
  this.arr = [1,2,3];
  this.und = undefined; 
  this.reg = /123/; 
  this.date = new Date(0); 
  this.NaN = NaN;
  this.infinity = Infinity;
  this.sym = Symbol(1);
} 

let obj1 = new Obj();
Object.defineProperty(obj1,'innumerable',{ 
  enumerable:false,
  value:'innumerable'
});
let obj2 = deepCopy(obj1);
obj2.obj.a = 2;
console.log(obj2);
console.log(obj1);