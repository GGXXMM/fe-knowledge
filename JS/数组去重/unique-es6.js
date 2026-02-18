// es6 实现去重
/** 1. Set：时间复杂度O(1)，空间复杂度O(n)
 *  优点：简洁，代码量最少
 *  缺点：无法去掉重复的空对象 {}
 */ 
// function unique(arr) {
//     return [...new Set(arr)];
// }

/**
 * 2. Map：时间复杂度O(n)，空间复杂度O(n)
 * 优点：利用 Map 结构，将每个元素作为key存入Map中，去重高效。
 * 缺点：无法去掉重复的空对象 {}
 */
// function unique(arr) {
//     let map = new Map();
//     let newArr = [];
//     for(let val of arr) {
//         if(!map.has(val)) {
//             newArr.push(val);
//             map.set(val, true);
//         }
//     }
//     return newArr;
// }


/**
 * 3. includes 判断：时间复杂度O(n)，空间复杂度O(n)
 * 优点：逻辑简单易懂
 * 缺点：无法去掉重复的空对象 {}
 */
// function unique(arr) {
//     let newArr = [];
//     for(let val of arr) {
//         if(!newArr.includes(val)) {
//             newArr.push(val);
//         }
//     }
//     return newArr;
// }

/**
 * 4. reduce + includes
 * 缺点：无法去掉重复的空对象 {}
 */
// function unique(arr) {
//     return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], [])
// }

/**
 * 5. filter + indexOf
 * 缺点：{}空对象没有去重，对NaN和‘NaN’错误去重
 */
// function unique(arr) {
// 	return arr.filter(function(item, index, arr) {
// 		  // 过滤当前元素，在原始数组中的第一个索引 === 当前索引值
// 		  return arr.indexOf(item) === index;
// 	});
// }

/**
 * 6. filter+hasOwnProperty（利用判断对象对象是否存在，较为完美）
 * 优点：这方法能过滤所有数据类型，并完美地去重
 */
function unique(arr) {
	var obj = {};
	return arr.filter(function(item) {
		if(obj.hasOwnProperty(item)) {
            return false;
        } else {
            obj[item] = true;
            return true;
        }
	});
}
console.log(unique([1,2,2,NaN,NaN,{},{}]));