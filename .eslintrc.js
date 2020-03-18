module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'babel-module': {
        paths: [
          'src',
          'src/client',
          'src/server',
          'src/client/utils',
          'src/client/api',
          'src/client/features',
          'src/client/grid',
          'types'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  globals: {
    shallow: true,
    render: true,
    mount: true,
    API_HOST: true,
    describe: true,
    it: true,
    expect: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  plugins: [
    'react',
    'prettier',
    'import',
    'jsx-a11y',
    'fp',
    'react-perf',
    'react-hooks',
    '@typescript-eslint/tslint',
    'security',
    'xss',
    'no-use-extend-native',
    'simple-import-sort'
  ],
  extends: ['plugin:react-perf/recommended', 'eslint:recommended', 'prettier', 'plugin:security/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    // 'simple-import-sort/sort': 'error',
    'no-use-extend-native/no-use-extend-native': 2,
    'xss/no-location-href-assign': 2,
    'security/detect-object-injection': 0,
    'no-magic-numbers': ['error', { ignore: [0, 1, 2] }],
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'arrow-parens': ['warn', 'as-needed'],
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 'error',
    'react-perf/jsx-no-new-function-as-prop': 0,
    'react-perf/jsx-no-new-object-as-prop': 0,
    'no-unexpected-multiline': 'off',
    'import/first': ['error', { 'absolute-first': true }],
    'import/no-default-export': 1,
    'import/no-unresolved': [2, { caseSensitive: true }],
    'import/named': 2,
    'import/no-self-import': 2,
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'fp/no-arguments': 'error',
    'fp/no-mutating-methods': [
      0,
      {
        allowedObjects: ['_', 'R', 'fp', 'pathOr']
      }
    ],
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false
      }
    ],
    'fp/no-valueof-field': 'error',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react/no-deprecated': 2,
    'react/destructuring-assignment': 0,
    'react/no-will-update-set-state': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/jsx-pascal-case': 1,
    'react/prop-types': 0,
    'no-duplicate-imports': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 0,
    'no-param-reassign': 0,
    'no-const-assign': 'error',
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-alert': 'error',
    'no-template-curly-in-string': 'error',
    'max-len': [
      1,
      {
        code: 120,
        ignoreUrls: false,
        comments: 300,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'line-comment-position': [0, { position: 'beside' }]
  }
}
