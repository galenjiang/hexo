import * as utils from '../src/'

const { promisify } = utils as any

const func = promisify.fbind((a, b, c) => a + b + c)

// func(1, 2, 3).then((res) => {
//   // eslint-disable-next-line
//   console.log(res);
// });


const nodeFunc = promisify.denodify((...args) => {
  const res = args.slice(0, args.length - 1)
    .reduce((acc, item) => acc + item, 0)
  return args[args.length - 1].apply(null, [null, res])
})

// nodeFunc(1, 2, 3).then((res) => {
//     // eslint-disable-next-line
//     console.log(res);
// });
