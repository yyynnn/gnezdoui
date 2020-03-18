import path from 'path'

const rootPath = p => path.resolve(__dirname, '../', p)

const aliases = {
  src: rootPath('./'),
  lib: rootPath('src/lib/'),
  utils: rootPath('src/utils/'),
  hooks: rootPath('src/hooks/'),
  theme: rootPath('src/theme/'),
  docs: rootPath('src/docs/'),
  playground: rootPath('playground/'),
  server: rootPath('server/'),
  'react-dom': '@hot-loader/react-dom',
  'styled-components': path.resolve(__dirname, '../node_modules', 'styled-components')
}

const setAlias = config => {
  config.resolve.alias = { ...config.resolve.alias, ...aliases }
  return config
}

export const aliasConfig = { setAlias, aliases }
