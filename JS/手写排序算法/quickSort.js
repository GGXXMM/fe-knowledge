// 快速排序
/**
 * 思路：
 * 1）选取数列中第1个元素为基准值 pivot
 * 2）分区操作：遍历数组，小于 pivot 放入左数组；大于 pivot 放入右数组（[less] pivot [greater]）
 * 3）递归排序左、右子数组，合并结果，即为从小到大排列的数组
 */
var arr1 = [5, 3, 8, 1, 2, 9, 4, 7, 6];

function quickSort(arr) {
  // 1）递归终止条件
  if (arr.length <= 1) {
    return arr;
  }

  // 2）选择基准值
  const pivot = arr[0];
  let left = [];
  let right = [];
  
  // 3）分区操作：遍历数组 [less] pivot [greater]
  for (let i = 1;i < arr.length;i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]); // 小于等于基准值，放入左数组
    } else {
      right.push(arr[i]); // 大于基准值，放入右数组
    }
  }
  // 4）递归排序左、右子数组，合并结果
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr1));

