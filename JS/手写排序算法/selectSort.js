// 选择排序
/**
 * 思想：
 * 1. 寻找最小的元素放置第一个位置
 * 2. 在剩余序列中寻找第二小的值放置第二个位置，依次类推，直至序列有序
 */
var arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function selectSort(array) {
  const len = array.length;
  let minIndex, temp;
  for (let i = 0; i < len-1; i++) {
    minIndex = i;
    for (let j = i+1; j < array.length; j++) {
      if(array[j] <= array[minIndex]) {
        minIndex = j
      }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectSort(arr))