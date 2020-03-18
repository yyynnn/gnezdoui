'use strict'

const IS_DEV = process.env.NODE_ENV === 'development'
const IS_TEST = process.env.NODE_ENV === 'test'
const BABEL_ENV = process.env.BABEL_ENV
const CI = process.env.CI && process.env.CI === 'true'

const nonES6Plugins = [
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
  [
    'babel-plugin-styled-components',
    {
      ssr: true,
      displayName: IS_DEV || IS_TEST
    }
  ],
  [
    'module-resolver',
    {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      root: ['./'],
      alias: {
        theme: ['./src/theme'],
        src: ['./src'],
        docs: ['./src/docs'],
        lib: ['./src/lib'],
        utils: ['./src/utils'],
        hooks: ['./src/hooks'],
        config: ['./config'],
        playground: ['./playground']
      }
    }
  ]
]

module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: BABEL_ENV === 'es' ? false : 'auto',
        // targets are specified in .browserslist
        // run `npx browserslist` will show resultant targets or see debug output from build
        useBuiltIns: 'usage',
        debug: CI, // show the browser target and plugins used when in CI mode
        corejs: '3'
      }
    ]
  ],
  plugins: BABEL_ENV === 'es' ? [] : nonES6Plugins,
  env: {
    production: {
      plugins: BABEL_ENV === 'es' ? [] : ['transform-react-remove-prop-types']
    }
  }
}
