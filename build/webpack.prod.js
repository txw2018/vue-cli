const path = require('path');
const merge = require('webpack-merge');//合并配置
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//用于提取css到文件中
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');//用于压缩css代码
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//用于清除上次打包的文件
const CopyWebpackPlugin = require('copy-webpack-plugin')// 用于拷贝静态资源
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin//查看打包体积分析

module.exports = merge(webpackConfig,{
  mode:'production',
  optimization:{
    splitChunks:{
      cacheGroups:{
        vendors:{
          name:'chunk-vendors',
          test:/[\\\/]node_modules[\\\/]/,
          priority:-10,
          chunks:'initial'
        },
        common:{
          name:'chunk-common',
          minChunks:2,
          priority:-20,
          chunks:'initial',
          reuseExistingChunk:true
        }
      }
    }
  },
  module:{
    rules:[
      {
        test:/\.(sass|scss)$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader
          },
          {
            loader:'css-loader',
            options:{
              importLoaders: 2
            }
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
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        NOOE_ENV:JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].[contenthash:8].css',
      chunkFilename:'css/[name].[contenthash:8].css'
    }),
    new OptimizeCssnanoPlugin({
      sourceMap:true,
      cssnanoOptions:{
        preset:[
          'default',
          {
            mergeLonghand:false,
            cssDeclarationSorter:false
          }
        ]
      }
    }),
    new CopyWebpackPlugin([
      {
        from:path.resolve(__dirname,'../public'),
        to:path.resolve(__dirname,'../dist')
      }
    ]),
    new CleanWebpackPlugin(),//重新打包清除无用文件
    new BundleAnalyzerPlugin({
      analyzerMode:'static'
    })
  ]
})


