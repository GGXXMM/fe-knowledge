/**
 * 转成树形结构函数
 * @param {Array} data 扁平化数据
 * @returns {Array} 树形结构数据
 */
// 1、递归
function transformTree(data) {
  if(!data.length) return [];
  let result = [];
  buildChildren(data, result, null)
  return result;
}
function buildChildren(data, result, parentId) {
  for (const item of data) {
    if(item.parentId == parentId) {
      const newItem = {...item, children: []};
      result.push(newItem);
      // children继续递归下探
      buildChildren(data, newItem.children, newItem.id);
    }
  }
}

// Test
// 扁平数据
let patten = [{
  name: '文本1',
  parentIdId: null,
  id: 1,
}, {
  name: '文本2',
  id: 2,
  parentId: 1
}, {
  name: '文本3',
  parentId: 2,
  id: 3,
}]
console.log(transformTree(patten))