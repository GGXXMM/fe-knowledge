/**
 * 实现 ajax 请求
 * @param {string} url 请求地址
 */
const myAjax = url => {
    return new Promise((resolve, reject) => {
        const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== 4) return;
            if(xhr.status >= 200 && xhr.status < 300) {
                // 返回请求响应
                resolve(xhr.responseText);
            }else{
                reject(new Error(xhr.responseText));
            }
        }
        // 错误监听
        xhr.onerror = () => {
            reject(new Error(`Network Error`));
        }
        xhr.send();
    })
}