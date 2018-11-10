const isTrue = value => value === true || value === 'true'

export default ({
  analyze,
  dev,
  prod,
  server,
  minify,
  showProgress,
  ...rest
} = {}) => {
  const __ANALYZE__ = isTrue(analyze)
  const __DEV__ = isTrue(dev)
  const __PROD__ = isTrue(prod)
  const __SERVER__ = isTrue(server)
  const __HMR__ = __DEV__ && !__SERVER__

  const __MINIFY__ = __PROD__ || isTrue(minify)

  return {
    ...rest,
    __ANALYZE__,
    __DEV__,
    __PROD__,
    __SERVER__,
    __HMR__,
    __MINIFY__,
    showProgress: isTrue(showProgress),
  }
}
