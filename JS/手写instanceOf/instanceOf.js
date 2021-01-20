/**
 * 实现instanceof功能
 * left instanceOf right
 * @param {*} left
 * @param {*} right
 */
function instanceOf(left,right) {
  let proto = left.__proto__;
  let prototype = right.prototype;
  while(true) {
    // 找到最顶层
    if(proto === null) return false;
    if(proto === prototype) return true;
    proto = proto.__proto__;
  }
}