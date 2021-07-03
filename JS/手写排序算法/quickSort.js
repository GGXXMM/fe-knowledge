// 快速排序
/**
 * 思想：
 * 1. 取中间位置的元素做为基准值
 * 2. 创建2个指针，左指针指向左边第一个值，右指针指向最后一个值，向右移动左指针找到比“基准值”大的，向左移动右指针找到比“基准值”小的，交换它们，以基准值划分成2个数组
 * 3. 划分后的数组重复上述2个步骤，直至子数组为1的长度
 */
var arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function quickSort(array) {
  // 定义左、右指针
  let left = 0, right = array.length - 1;
  const quick = (arr, left, right) => {
    // 递归终止条件，直至数组只包含一个元素
    if(arr.length == 1) return;
    // 获取左指针，准备下一轮分解
    let index = partition(arr, left, right)
    if(left < index-1) {
      quick(arr, left, index-1)
    }
    if(index < right) {
      quick(arr, index, right);
    }
  }
  quick(array, left, right)
  return array;
}

// 划分过程
function partition(arr, left, right) {
  // 取中间项为基准值
  let pivot = arr[left + Math.floor((right-left)/2)];
  while(left <= right) {
    // 持续右移左指针，直至值大于pivot
    while(arr[left] < pivot) {
      left++;
    }
    // 持续左移右指针，直至值小于pivot
    while(arr[right] > pivot) {
      right--;
    }
    if(left <= right) {
      // 交换两者的值，使得小于pivot的值在其左侧，大于pivot的值在其右侧
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // 左指针右移，右指针左移准备开始下一轮，防止arr[left]和arr[right]都等于pivot然后导致死循环。
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort(arr))