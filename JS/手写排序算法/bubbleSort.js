// 冒泡排序
// 思想：从左到右两两比较，大的后置，依次循环比较，直至有序排列
var arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function BubbleSort(array) {
  let len = array.length;
  if(len < 2) return array;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-1-i; j++) {
      if(array[j] > array[j+1]) {
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(BubbleSort(arr));