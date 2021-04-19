function deepCopy(obj) {
  if(typeof obj !== 'object') {
    return;
  }
  let cloneObj = obj instanceof Array ? [] : {};
  for(let key in obj){
    if(typeof obj[key] === 'object') {// 是对象，就继续递归调用deepCopy
      cloneObj[key] = deepCopy(obj[key])
    }else {// 是基本类型，就直接复制
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}