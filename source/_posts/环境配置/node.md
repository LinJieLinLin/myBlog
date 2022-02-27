---
title: node
date: 2021-07-02 22:03:54
tags:
  - 配置
  - node
---

{% blockquote %} node 相关 {% endblockquote %}

# [nvm](https://github.com/coreybutler/nvm-windows)

``` shell
# 安装目录
nvm root
# 安装版本
nvm install v14.15.3
# 默认版本
nvm use 14.15.3
```

# [nvs](https://github.com/jasongin/nvs/releases)

## 修改默认源 vim ./defaults.json

``` json
{
 "aliases": {
 },
 // for windows
 "linkToSystem": true,
 "remotes": {
  "default": "node",
  "node": "https://npm.taobao.org/mirrors/node/"
 },
 "bootstrap": "node/12.18.2"
}
```

``` shell
# 添加源
nvs remote taobao https://npm.taobao.org/mirrors/node/
# 安装最新稳定版
nvs add lts
# 安装指定版本
nvs add 14.15.3
# 设置默认版本
nvs link 14.15.3
# 列出当前版本路径
nvs which
# 临时使用指定版本，当前窗口生效
nvs use 14.15.3
# npm 必装
npm i nrm yarn yrm eslint prettier http-server pnpm  -g --registry=https://registry.npm.taobao.org
```

# npm配置

``` shell
# puppeteer下载源
npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
# 指定npm源
npm i nrm --registry=https://registry.npm.taobao.org
```
