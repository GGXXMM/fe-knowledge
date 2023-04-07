/**
 * 获取url地址某个参数值
 * @param {string} field 参数键名
 * @return {any} 该参数键值
 */
function getUrlParameter(field) {
    const paramStr = window.location.search ? window.location.search.substring(1) : '';
    let GET = {};
    if(paramStr) {
        const paramArr = paramStr.split('&');
        for(let i = 0;i < paramArr.length;i++) {
            let [itemKey, itemVal] = paramArr[i].split('=');
            GET[itemKey] = itemVal;
        }
    }
    return GET[field];
}