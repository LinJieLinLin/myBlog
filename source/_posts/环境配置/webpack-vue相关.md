---
title: webpack-vue
date: 2018-11-11
tags:
  - 配置
  - JS
---

{% blockquote %} 一句话描述 {% endblockquote %}

<!--more-->

# vue cli3JS

## 修改 webpack 插件配置

```
// 添加生成的html标签的双引号
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                if (args[0] && args[0].minify) {
                    args[0].minify.removeAttributeQuotes = false
                }
                return args
            })
    }
// 小图片转base64,url-loader最新版本要设置esModule: false,否则会显示src=“[object module]“
chainWebpack: (config) => {
    config.output.globalObject('this')
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        esModule: false,
        // 对10K以下图片处理转为base64格式
        limit: 10240,
        // 以下配置项用于配置file-loader
        outputPath: 'assets/img/',
        name: '[name].[hash:8].[ext]',
      })
      .end()
  },
```
