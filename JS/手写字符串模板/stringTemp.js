/**
 * 字符串模版解析
 * @param {string} template 字符串模板
 * @param {object} data 
 * @returns 
 */
function render(template, data) {
  const reg = /\$\{(\w+)\}/;
  if(reg.test(template)){
    const name = reg.exec(template)[1];
    template = template.replace(reg, data[name]);
    return render(template, data);// 递归查找字符串模板变量，并渲染
  }
  return template;// 如果没有字符串模板，直接返回
}

// Test
let template = '我是${name}，年龄${age}，性别${sex}';
let person = {
    name: '布兰',
    age: 12
}
render(template, person); // output：我是布兰，年龄12，性别undefined
