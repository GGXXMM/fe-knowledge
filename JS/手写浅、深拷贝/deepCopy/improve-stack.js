/**
 * 改进3：栈+循环代替递归（解决爆栈问题）
 * 缺陷：需要引用保持时，存在重复创建属性的问题
 */
/**
 * 实现思路：参考https://yanhaijing.com/javascript/2018/10/10/clone-deep/
 * 1）使用loopList栈存储自顶向下拷贝的父对象、属性名、属性值（最里面的属性与值存于栈顶）
 * 2）循环取出loopList栈顶元素逐一拷贝，直至栈为空，返回拷贝后对象即可
 */
function deepCopyLoop(data){
  let root = Array.isArray(data) ? [] : {};
  // 栈
  const loopList = [
    {
        parent: root,// 存放逐级向下拷贝的对象
        key: undefined,// 当前拷贝的属性名
        data: data// 当前拷贝的属性值
    }
  ]
  // 深度优先
  while(loopList.length) {
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;// res、parent共同指向同一个对象root
    if (typeof key !== 'undefined') {
        res = parent[key] = {};
    }
    for(let k in data) {
      if(data.hasOwnProperty(k)) {
        if(typeof data[k] === 'object') {
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        }else{
          res[k] = data[k]
        }
      }
    }
  }
  return root;
}

// Test
// let obj1 = {
//   a1: 1,
//   a2: {
//     b1: 1,
//     b2: {
//       c1: 1
//     }
//   }
// }

// let obj2 = deepCopyLoop(obj1);
// obj2.a2.b2.c1 = 2
// console.log(obj2)
// console.log(obj1)


/**
 * 改进4：缓存已拷贝属性，避免重复创建属性，同时也解决循环引用的问题
 * 思路：拷贝属性前，先判断是否拷贝过，拷贝过直接用原来的
 */
function deepCopyUnique(data) {
  let root = Array.isArray(data) ? [] : {};
  const uniqueList = [];
  // 栈
  const loopList = [
    {
        parent: root,// 存放逐级向下拷贝的对象
        key: undefined,
        data: data,
    }
  ]
  while(loopList.length) {
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    let res = parent;
    if(typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    // 数据已存在，判重（直接返回原来已存数据）
    const uniqueData = find(uniqueList, data)
    if(uniqueData) {
      parent[key] = uniqueData.target;
      break;// 中断本次循环
    }
    uniqueList.push({
      source: data,
      target: res
    })

    for(let k in data) {
      if(data.hasOwnProperty(k)) {
        if(typeof data[k] === 'object') {
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        }else{
          res[k] = data[k]
        }
      }
    }
  }
  return root;
}
// arr数组中查找是否存在
function find(arr, item) {
  for(let i = 0;i < arr.length;i++) {
    if(arr[i].source === item) {
      return arr[i];
    }
  }
  return null;
}
// Test
let b = {}
let obj1 = {
  a1: b,
  a2: b
}
// let obj2 = deepCopyUnique(obj1);
// console.log(obj2)
// console.log(obj2.a1 === obj2.a2);

/**
 * 创建多层嵌套属性对象
 * @param {Number} deep 属性嵌套层数
 * @param {Number} count 每层属性个数
 * @returns 
 */
function createData(deep, count) {
  let data = {}
  let temp = data;
  for(let i = 0;i < deep;i++) {
    temp = temp['data'] = {}
    for(let j = 0;j < count;j++) {
      temp[j] = j;
    }
  }
  return data;
}

// ----- 性能对比：deepCopyLoop vs deepCopyUnique ----
/**
 * 统计timer时间内，执行fn函数的次数（执行次数越多，性能越好）
 * @param {Function} fn 
 * @param {Number} timer 
 * @returns 
 */
function runTime(fn, timer) {
  let stime = Date.now();
  let count = 0;
  while(Date.now() - stime < timer) {
    fn();
    count++;
  }
  return count;
}
let count1 = runTime(()=> deepCopyLoop(createData(500,1)), 2000)
let count2 = runTime(()=> deepCopyUnique(createData(500,1)), 2000)
console.log(count1)
console.log(count2)
// ------ 结论：1.拷贝层级嵌套很多的对象，deepCopyLoop性能优于deepCopyUnique；2.拷贝存在循环引用的属性，deepCopyUnique适合