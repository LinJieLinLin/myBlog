---
title: webpack-vue相关
date: 2018-11-11
tags: 
- 配置
- JS
---
{% cq %} 一句话描述 {% endcq %}
<!--more-->
#  vue cli3JS
## 修改webpack插件配置
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
```




