/* eslint-disable prefer-template */
import path from 'path'
import fs from 'fs'

import doczPluginGithubPage from 'docz-plugin-github-page'

import { aliasConfig } from './webpack/aliases'

const IS_PROD = process.env.NODE_ENV === 'production'
const basePath = 'gneznoui'

const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, './.env')
})
// eslint-disable-next-line no-console
const env = dotenv ? dotenv.parsed : console.log('ENV IS EMTPY!')

// eslint-disable-next-line import/no-default-export
export default {
  title: 'GNEZDO Bank Docz',
  description: 'Docz',
  base: IS_PROD ? `/${basePath}/` : '/',
  debug: true,
  port: env ? env.DOCZ_PORT : '666',
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /src\/lib\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath)),
  modifyBundlerConfig: config => aliasConfig.setAlias(config),
  plugins: [doczPluginGithubPage()],
  menu: ['Главная', 'Начало работы', 'Стиль', 'Компоненты', 'Примитивы', 'Custom React Hooks'],
  htmlContext: {
    head: {
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      raw: `<style>${fs.readFileSync(process.cwd() + '/config/docz.css')}</style>`,
      links: []
    }
  },
  themeConfig: {
    mode: 'light',
    showPlaygroundEditor: true,
    logo: {
      src: 'https://www.gnezno.ru/upload/static/gnezno_new_logo.svg'
    },
    colors: {
      white: '#FFFFFF',
      grayExtraLight: '#EEF1F5',
      grayLight: '#CED4DE',
      gray: '#7D899C',
      grayDark: '#2D3747',
      grayExtraDark: '#1D2330',
      dark: '#13161F',
      blue: 'red',
      skyBlue: 'red',
      primary: 'red'
    },
    styles: {
      container: {
        width: '100%!important',
        padding: '1vw 7vw!important'
      }
    }
  }
}
