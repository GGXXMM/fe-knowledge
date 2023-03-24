// es6 实现去重
/** 1. Set
 *  优点：简洁，代码量最少
 *  缺点：无法去掉重复的空对象 {}
 */ 
function unique(arr) {
    return [...new Set(arr)]
}

/**
 * 2. Map
 * 优点：利用Map结构，将每个元素作为key存入Map中，去重高效。
 * 缺点：无法去掉重复的空对象 {}
 */
function unique(arr) {
    let map = new Map();
    let newArr = [];
    for(let val of arr) {
        if(map.has(val)) {
            map.set(val, true);
        }else{
            map.set(val, false);
            newArr.push(val);
        }
    }
    return newArr;
}

/**
 * 3. includes判断
 * 优点：逻辑简单易懂
 * 缺点：无法去掉重复的空对象 {}
 */
function unique(arr) {
    let newArr = [];
    for(let val of arr) {
        if(!newArr.includes(val)) {
            newArr.push(val);
        }
    }
    return newArr;
}

/**
 * 4. reduce+includes
 * 缺点：无法去掉重复的空对象 {}
 */
function unique(arr) {
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], [])
}