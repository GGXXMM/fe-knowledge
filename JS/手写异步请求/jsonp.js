/**
 * jsonp 原理：script标签不受同源策略限制。
 * 1.动态创建 script 标签，其 src 指向非同源的 url，并传递callback参数给服务器;
 * 2.服务器返回以callback命名的函数调用和一些列参数;
 * 3.页面收到响应后执行回调。
 */
const jsonp = ({url, params, callbackName})=> {
    const generateUrl = () => {
        let dataSrc = '';
        for(let key in params) {
            if(params.hasOwnProperty(key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }
    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script')
        scriptEle.src = generateUrl()
        document.body.appendChild(scriptEle)
        window[callbackName] = data => {
            resolve(data)
            document.removeChild(scriptEle)
        }
        // 错误监听
        scriptEle.onerror = err => {
            reject(err)
        }
    })
}