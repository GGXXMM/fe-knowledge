const template = '嗨,{{info.name.value}}您好,今天是星期{{day.value}}';
const data = {
  info: {
    name: {
      value: '张三'
    }
  },
  day: {
    value: '三'
  }
};

// 模板解析函数
function renderTemp(template, data) {
  let reg = /\{\{(\w+)\}\}/;
  if(reg.test(template)) {
    const variable = reg.exec(template)[1];
    template = template.replace(reg, data[variable]);
    return renderTemp(template, data);// 递归查找字符串模板变量，并渲染
  }
}

renderTemp(template, data); // 嗨，张三您好，今天是星期三
