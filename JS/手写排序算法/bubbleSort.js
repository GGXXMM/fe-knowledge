// 冒泡排序：时间复杂度O(n^2)，空间复杂度O(1)
// 思想：从左到右两两比较，大的后置，依次循环比较，直至有序排列
var arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function BubbleSort(array) {
  let len = array.length;
  if (len <= 1) return array;
  for (let i = 0;i < len;i++) {
    for (let j = 0;j < len - i -1;j++) {
      if (array[j] > array[j+1]) {
        // 交换位置
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}

console.log(BubbleSort(arr));