/**
 * 颜色十六进制格式转换成rgb格式
 * 如：#ffffff => rgb(255,255,255)
 * @param {*} color 
 * @returns 
 */
const colorToRGB = (color) => {
  let color1, color2, color3;
  // 非法格式
  if(typeof color !== "string") return
  // 合法格式
  if(color.charAt(0) === '#') {
    color = color.substring(1)
  }
  // 3个字符转换为6个统一标准
  if(color.length === 3) {
    color = color[0] + color[0] + color[1]+ color[1] + color[2]+ color[2]
  }
  // 匹配并转换
  if(/^[0-9a-fA-F]{6}$/.test(color)) {
    // 十六进制转十进制
    color1 = parseInt(color.slice(0,2), 16)
    color2 = parseInt(color.slice(2,4), 16)
    color3 = parseInt(color.slice(4), 16)
  }
  return `rgb(${color1},${color2},${color3})`
}

console.log(colorToRGB('#ffffff'))