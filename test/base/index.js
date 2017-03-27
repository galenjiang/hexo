import utils from '../../src/';

const { base } = utils;
const { existy, truthy, complement, cat, construct, doWhen, invoker, dispatch } = base;

// const reverse = invoker('reverse', Array.prototype.reverse);
// console.log(reverse([1, 2, 3]));
const str = dispatch(
  invoker('toString', Array.prototype.toString),
  invoker('toString', String.prototype.toString),
);
console.log(str(true));

