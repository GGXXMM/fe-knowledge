/** 基础类型 */
var a = 123;
var str = 'hello world';
var c = true;
var d = undefined;
var e = null;
var s = Symbol('symbol');
var big = 123n;
function func() {
    console.log('hello world');
}
/** 复合类型 */
// 数组
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
// 元组
var tuple = [1, 'hello'];
// 枚举
/** 特殊类型 */
var any = 123;
var un;
un = 123;
un = 'hello';
var never = (function () { throw new Error('never type'); })();
