function partial(fn, ...args) {
  return function(...arg) {
    return fn(...args, ...arg)
  }
}

// Test
function add(a, b, c) {
  return a + b + c
}
let partialAdd = partial(add, 1)
console.log(partialAdd(2, 3))
