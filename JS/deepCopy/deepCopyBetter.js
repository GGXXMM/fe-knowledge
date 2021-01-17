/**
 * 较为完善的深拷贝
 * @param {Object/Array/Date/RegExp/Function/String/Number/Boolean/Undefined/Null/Symbol} data
 * @return cloneData 拷贝后的对象
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
