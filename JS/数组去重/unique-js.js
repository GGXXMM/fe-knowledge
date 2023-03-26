// 原生 js 实现去重
/**
 * 1. for循环枚举
 * 优点：正向思维，删除重复的元素
 * 缺点：
 * 1）双层循环，时间复杂度为O(n^2)，效率较低
 * 2）NaN和{}空对象都没有去重，为true的布尔值、null值会直接被删除
 */
function unique(arr) {
    for(let i = 0;i<arr.length;i++) {
        for(let j = i+1;j<arr.length;j++) {
            if(arr[j] === arr[i]) {
                arr.splice(j,1)
            }
        }
    }
    return arr;
}

/**
 * 2. indexOf判断
 * 缺点：NaN和{}空对象都没有去重
 */
function unique(arr) {
    let newArr = [];
    for(let i = 0;i<arr.length;i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/**
 * 3. sort + 比较相邻元素
 * 缺点：NaN和{}空对象都没有去重
 */
function unique(arr) {
    // 排序
    arr = arr.sort();
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i-1]) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

/**
 * 4. 使用递归去重
 * 缺点：NaN和{}空对象都没有去重
 */
function unique(arr) {
	var array = arr;
	var len = arr.length;

	array.sort();//排序后更加方便去重
	function loop(index) {
		if(index >= 1) {
			if(array[index] === array[index-1]) {
				array.splice(index,1);
			}
			loop(index - 1); // 递归调用loop函数
		}
	}
	loop(len -1);
	return array;
}

/**
 * 5. filter
 * 缺点：{}空对象没有去重，对NaN和‘NaN’错误去重
 */
function unique(arr) {
	return arr.filter(function(item, index, arr) {
		  // 过滤当前元素，在原始数组中的第一个索引==当前索引值
		  return arr.indexOf(item) === index;
	});
}

/**
 * 6. 对象属性（错误去重，不建议使用）
 * 缺点：2个true直接删除了，对NaN和‘NaN’错误去重
 */
function unique(arr) {
	var array = [];
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		if(!obj[arr[i]]) {// 判断是否有当前属性
			array.push(arr[i]);
			obj[arr[i]] = true;
		}
	}
	return array;
}

/**
 * 7. hasOwnProperty（利用判断对象对象是否存在，较为完美）
 * 优点：这方法能过滤所有数据类型，并完美地去重
 */
function unique(arr) {
	var obj = {};
	return arr.filter(function(item, index, arr) {
		return obj.hasOwnProperty(typeof item) ? false : (obj[typeof item + item] = true)
	});
}