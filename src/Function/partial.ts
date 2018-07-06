// same as bind expect that partial not catch the context
const partial = (fn, ...args) =>
  fn.bind(null, args)
export default partial
