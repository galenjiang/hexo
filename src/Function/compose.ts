/*
 * 递归嵌套数组方法
 * const add5 = x => x + 5
 * const multiply = (x, y) => x * y
 * const multiplyAndAdd5 = compose([add5], multiply)
 * multiplyAndAdd5(5, 2)
 */

const compose = (...fns) =>
  fns.reduce(
    (accFn, arg) =>
      arg instanceof Function
        ? (...args) => accFn(arg(...args))
        : arg instanceof Array
        ? (...args) => accFn(compose(arg)(...args))
        : accFn,
    id => id
  )
export default compose
