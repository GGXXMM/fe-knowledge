/**
 * 反柯里化：将特定的功能函数扩大适应范围
 * @param {Function} fn
 */
function unCurry(fn) {
    return function() {
        var obj = [].shift.call(arguments);// 删除并返回第一项
        return fn.apply(obj, arguments)
    }
}