// 真值：true、所有非0/-0/NaN的数字、非空字符、函数（包装类、普通函数）、数组、对象
var truthyArr = [true, 1, 'test', new Function(), [], {}]
// 假值：undefined、null、false、0、-0、NaN、''
var faslyArr = [undefined, null, false, 0, -0, NaN, '']

if(truthyArr[4]) {
  console.log('truthy')
}else if(!faslyArr[0]) {
  console.log('falsy')
}