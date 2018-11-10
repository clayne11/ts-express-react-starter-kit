import path from 'path'

import smartMergeArray from './utils/smartMergeArray'

const serverPreset = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      targets: {},
      modules: false,
    },
  ],
  '@babel/preset-react',
  path.join(__dirname,'clayne-babel-preset'),
]

const clientPreset = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      targets: {
        browsers: ['last 2 versions', '> 5%', 'ios >= 9'],
      },
      modules: false,
    },
  ],
  '@babel/preset-react',
  path.join(__dirname,'clayne-babel-preset'),
]

export default ({__PROD__, __HMR__, __MINIFY__, __SERVER__}) => {
  return {
    babelrc: false,
    presets: __SERVER__ ? serverPreset : clientPreset,
    plugins: smartMergeArray(
      // __HMR__ && 'react-hot-loader/babel',
      [
        'babel-plugin-styled-components',
        {
          displayName: !__MINIFY__,
          ssr: true,
        },
      ],
      path.join(__dirname, 'reactLoadableBabel')
    ),
  }
}
