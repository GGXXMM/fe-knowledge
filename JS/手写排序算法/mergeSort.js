// 归并排序
/**
 * 思想：
 * 1. 将序列依次折半划分，直至子数组长度为1
 * 2. 将子数组有序合并
 */
var arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function mergeSort(array) {
  var len = array.length;
  if (len < 2) {
    return array;
  }
  var middle = Math.floor(len / 2),
    left = array.slice(0, middle),
    right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

// 合并
function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
}

console.log(mergeSort(arr))