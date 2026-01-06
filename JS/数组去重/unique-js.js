// 原生 js 实现去重
/**
 * 1. for 循环枚举
 * 优点：正向思维，删除重复的元素
 * 缺点：
 * 1）双层循环，时间复杂度为O(n^2)，效率较低
 * 2）NaN和{}空对象都没有去重
 */
function unique(arr) {
    for(let i = 0;i < arr.length;i++) {
        for(let j = i+1;j<arr.length;j++) {
            if(arr[j] === arr[i]) {
                arr.splice(j,1)
            }
        }
    }
    return arr;
}

/**
 * 2. indexOf 判断
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
	var len = arr.length;

	arr.sort();// 排序后更加方便去重
	function loop(index) {
		if(index >= 1) {
			if(arr[index] === arr[index-1]) {
				arr.splice(index,1);
			}
			loop(index - 1); // 递归调用loop函数
		}
	}
	loop(len - 1);
	return arr;
}

/**
 * 5. 对象属性判重
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

