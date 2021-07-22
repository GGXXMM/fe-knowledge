// 扁平数据
let patten = [{
  name: '文本1',
  parent: null,
  id: 1,
}, {
  name: '文本2',
  id: 2,
  parent: 1
}, {
  name: '文本3',
  parent: 2,
  id: 3,
}]

// 转成树形结构函数
// 1、递归
function transformTree(data) {
  if(!data.length) return [];
  let result = [];
  buildChildren(data, result, null)
  return result;
}
function buildChildren(data, result, parent) {
  for (const item of data) {
    if(item.parent == parent) {
      const newItem = {...item, children: []};
      result.push(newItem);
      // children继续递归下探
      buildChildren(data, newItem.children, newItem.id);
    }
  }
}

