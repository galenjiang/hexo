const bind = (fn, context, ...args) =>
  (...otherArgs) => fn.apply(context, args.concat(otherArgs))
export default bind
