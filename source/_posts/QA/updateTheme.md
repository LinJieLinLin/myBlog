---
title: 记一次主题更新
date: 2022-02-18 21:27:30
tags:
  - 问题
categories: [问题]
---
{% blockquote %} 使用patch-package生成patch覆盖node_modules里的包 {% endblockquote %}

<!--more-->

## 升级主题

``` shell
yarn upgrade-interactive --latest
# 选择要升级的包即可
```

> 问题一：_config.ayer.yml与主题包内的_config.yml配置是assign形式
> 问题二：本blog运行在二级目录下，开始全局search发现引用的js xml均请求根路径

## 解决方案

``` shell
# 手动进入主题包目录 1.node_modules\hexo-theme-ayer\_config.yml 删除多余配置 2.node_modules\hexo-theme-ayer\source\dist\main.js /js/search.js to /二级目录名/js/search.js /search.xml to /二级目录名/search.xml
# 然后执行打补丁
npx patch-package hexo-theme-ayer
# 在package.json script添加
# "postinstall": "npx patch-package",
# 提交即可
# ps 以后升级主题包的话，生成的patch版本对应改上即可
```
