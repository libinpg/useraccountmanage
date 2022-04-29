module.exports = {
  transpileDependencies: [
        'vuetify'
  ],
  devServer: {
  proxy: {
  '/api': {
  target: 'http://127.0.0.1:3000',
  changeOrigin: true, // 解决跨域
  pathRewrite: {
  '^/api': '',
  },
  '/cgi-bin': {
    target: 'https://mp.weixin.qq.com',
    changeOrigin: true, // 解决跨域
    pathRewrite: {
    '^/cgi-bin': '',
    },
    }
  },
  },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo/'
    : '/',
  chainWebpack: config => {
    config.module
      .rule('json')
      .test(/\.(json|geojson)$/i)
      .use('json')
      .loader('json-loader')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          'vl-style-icon': 'src',
          'VlStyleIcon': 'src',
        }
        return options
      })
  },
 };