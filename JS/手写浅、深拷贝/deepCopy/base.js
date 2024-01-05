/**
 * 深拷贝：JSON.stringify
 * @param {Object/Array} data 
 */
function deepCopyJSON(data){
  return JSON.parse(JSON.stringify(data));
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
// let obj2 = deepCopyJSON(obj1);
// console.log(obj2);
// console.log(obj1);

/**
 * 基础版：递归（解决JSON.stringify 拷贝后undefined、symbol、function类型的属性丢失的问题）
 * @param {Object/Array} data 
 */
function deepCopyRecursion(data) {
  let newObj = Array.isArray(data) ? [] : {};

  for(let key in data) {
    if(data.hasOwnProperty(key)) {
      if(typeof data[key] === 'object') {
        newObj[key] = deepCopyRecursion(data[key])
      }else{
        newObj[key] = data[key]
      }
    }
  }
  return newObj;
}

let obj2 = deepCopyRecursion(obj1);
console.log(obj2);
console.log(obj1);