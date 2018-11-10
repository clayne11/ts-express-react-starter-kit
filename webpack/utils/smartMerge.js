export default (...args) =>
  args.filter(arg => !!arg).reduce(
    (result, arg) => ({
      ...result,
      ...arg,
    }),
    {}
  )
