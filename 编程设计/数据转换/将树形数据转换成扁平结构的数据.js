/**
 * 树形结构 -> 扁平结构
 * @param {Array} data 树形结构数据
 * @param {number} level 当前数据所在层级
 * @param {Array} path 记录递归调用栈路径
 * @returns 
 */
// 参考：数组扁平化方法 reduce
function flattenTree(data, level = 0, parentId = null) {
  level++;
  return data.reduce((prev, cur)=> {
    const item = {...cur};
    item.level = level;
    item.parentId = parentId;
    // 递归拍平数据
    if(item.children) {
      // 取当前 id 作为children 的 parentId
      const parentId = item.id;
      const childrens = item.children;
      delete item.children;
      return prev.concat(item, flattenTree(childrens, item.level, parentId))
    }else{
      return prev.concat(item)
    }
  }, [])
}

// Test
const treeData = [
  {
    label: "父节点1",
    id: "1"
  },
  {
    label: "父节点2",
    id: "2",
    children: [
      {
        label: "子节点2-1",
        id: "2-1"
      },
      {
        label: "子节点2-2",
        id: "2-2",
        children: [
          {
            label: "子节点2-2-1",
            id: "2-2-1"
          }
        ]
      }
    ]
  }
]
console.log(flattenTree(treeData))