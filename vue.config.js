const { resolve } = require('path')
const defaultSettings = require('./src/setting.js')
const publicPath = defaultSettings.publicPath || '/' // publicPath
const name = defaultSettings.title || 'to-vs-front-end-template' // page title

module.exports = {
  publicPath: publicPath,

  // server settings
  // derServer: {
  //   disableHostCheck: true,
  //   proxy: {
  //     '/API': {
  //       target: defaultSettings.api.fullPath,
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/API': '/'
  //       }
  //     }
  //   }
  // },

  // web settings
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
