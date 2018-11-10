import getBabelOptions from './getBabelOptions'

export default options => ({
  loader: 'babel-loader',
  options: getBabelOptions(options),
})
