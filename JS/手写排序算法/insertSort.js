// 插入排序
/**
 * 思想：
 * 1. 将第一个元素，视为有序序列头部元素
 * 2. 由后面一个元素，从后向前扫描，遇到该项小于当前左项值，左项值右移一位，该项插入当前左项位置
 * 3. 重复步骤2，直至有序
 */
var arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function insertSort(array) {
  let len = array.length;
  for (let i = 1; i < len; i++) {
    let preIndex = i-1;// 从后向前扫描指针
    let current = arr[i];// 当前元素
    while(preIndex >= 0 && array[preIndex] > current) {
      array[preIndex+1] = array[preIndex];
      preIndex--;
    }
    array[preIndex+1] = current;
  }
  return array;
}

console.log(insertSort(arr))