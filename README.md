# vue-cli

### 1.启动项目

1. 安装依赖库

```
yarn install
```
2.webpack打包
```
yarn build
```
3.本地开发预览
```
yarn serve
```

## 2.项目结构

```
vue-cli
├─── build                     # webpack配置文件
├────────── webpack.config.js        # 公共配置
├────────── webpack.dev.js           # 开发环境配置
├────────── webpack.prod.js          # 生产环境配置
├─── node_modules             # 第三方依赖，库等
├─── dist                     # 打包出来的文件
├─── .gitignore               # git提交代码忽略文件配置
├─── public                   # 静态文件 绝对资源路径，不会被 Webpack 处理，它们会直接被复制到最终目录
├────────── index.html               # 模板文件`
├─── src                      # 源代码
├────────── App.vue                  # 根组件
├────────── main.js                  # 入口文件
babel.config.js               # Babel 配置文件
package.json                  # 项目依赖信息文件
postcss.config.js             # postcss配置文件
README.md                     # 项目介绍文件
```

##3.loader配置介绍
```
vue-loader                                   #用于解析.vue文件
vue-template-compiler                        #用于编译解析template模板
cache-loader                                 #在一些性能开销较大的 loader 之前添加此 loader，以将结果缓存到磁盘里。
thread-loader                                #使用 worker 池来运行loader，每个 worker 都是一个 node.js 进程。
css-loader                                   #让webpack识别css文件。
style-loader                                 #通过注入<style>标记将CSS添加到DOM
url-loader                                   #在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
file-loader                                  #解析文件url，并将文件复制到输出的目录中
sass-loader, dart-sass                       #主要是将 scss/sass 语法转为css
postcss-loader autoprefixer                  #自动添加css3前缀
babel-loader @babel/core @babel/preset-env   #ES6/7/8 转 ES5代码
```
##4.plugin配置介绍
```
html-webpack-plugin                    #创建html页面，并自动引入打包生成的js文件
clean-webpack-plugin                   #每次构建前清理 /dist 文件夹
webpack.NamedModulesPlugin             #当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
webpack.HotModuleReplacementPlugin     #启用HMR
copy-webpack-plugin                    #允许在编译时(compile time)配置的全局常量
mini-css-extract-plugin                #用于提取css到文件中
webpack-bundle-analyzer                #查看打包体积分析
@intervolga/optimize-cssnano-plugin    #用于压缩css代码
DefinePlugin                           #定义环境变量
```
##5.Other
```
@babel/polyfill                         #babel-polyfill 对一些不支持新语法的客户端提供新语法的实现
webpack-dev-server                      #实现热更新
webpack-merge                           #合并配置
``` 
##6.系列资料
- [webpack loader](https://www.webpackjs.com/loaders/)
- [webpack plugins](https://www.webpackjs.com/plugins/)