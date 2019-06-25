const merge = require('webpack-merge');//合并配置
const webpackConfig = require('./webpack.config');
const webpack = require('webpack')
module.exports = merge(webpackConfig,{
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  module:{
    rules:[
      {
        test:/\.(scss|sass)$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'sass-loader',
            options:{
              implementation:require('dart-sass')
            }
          },
          {
           loader:'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
      }
    }),
  ]
})