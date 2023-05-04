/**
 * 封装 fetch 请求（简化异步请求调用）
 * @param {string} url 请求地址
 * @param {object} options 参数配置
 */
const http = (url, options = {})=> {
    let {
        method = 'get',
        data = {},
        headers = {},
        credentials = 'same-origin'// 同源
    } = options
    // 判断是否是 get 请求
    let isGet = method.toLowerCase() == 'get';
    if(isGet){
        let paramStr = '';
        for(let key in data) {
            paramStr += `${key}=${data[key]}&`
        }
        paramStr = paramStr.replace(/&$/, '')// 删除最后一个&
        url = url.indexOf('?') == -1 ? url + '?' + paramStr : url + '&' + paramStr; 
    }
    return fetch(url, {
        method,
        body: isGet ? null : JSON.stringify(data),
        headers,
        credentials
    }).then(data => {
        if(/[45]\d{2}/.test(data.status)) {// 客户端和服务器端错误
            throw Error(`${data.status}${data.statusText}`)
        }
        return data.json();
    })
}

http.get = (url, data) => {
    return http(url, {
        method: 'get',
        data
    })
}
http.post = (url, data) => {
    return http(url, {
        method: 'post',
        data
    })
}