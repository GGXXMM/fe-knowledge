// 1. eval
function jsonParse(opt) {
  return eval("("+ opt + ")");
}

// 2. new Function
function jsonParse(opt) {
   return (new Function('return' + opt))()
}
console.log(jsonParse('{"x":5}'))
