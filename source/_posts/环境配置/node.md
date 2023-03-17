---
title: node
date: 2021-07-02 22:03:54
tags:
  - 配置
  - node
---

{% blockquote %} node {% endblockquote %}

<!--more-->

## [nvm](https://github.com/coreybutler/nvm-windows)

```shell
# 安装目录
nvm root
# 安装版本
nvm install v14.15.3
# 默认版本
nvm use 14.15.3
```

## [nvs](https://github.com/jasongin/nvs/releases)

### 修改默认源 vim ./settings.json

```json
{
  "aliases": {},
  // for windows
  "linkToSystem": true,
  "bootstrap": "node/12.18.2"
}
```

```shell
# 添加源
nvs remote taobao https://npm.taobao.org/mirrors/node/
nvs remote default taotao
# for win
nvs linkToSystem true
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
npm i nrm  yrm eslint degit prettierrc stylelint   http-server cross-env  -g --registry=https://registry.npm.taobao.org
```

## npm 配置

```shell
# puppeteer下载源
npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
# 指定npm源
npm i nrm --registry=https://registry.npm.taobao.org
nrm use taobao
# 修改package.json script配置
npm set-script postinstall "npx husky install"
# 配置npm init 默认属性
npm set init.license "Apache-2.0"
npm set init.author.email  "993353454@qq.com"
npm set init.author.name  "linjielinlin"
# 更新package.json version:"x.y.z" 对应 patch.minor.major
npm version patch
npm version minor
npm version major
```

## 缓存目录设置

```shell
# npm/yarn/pnpm
# get
npm config get cache
yarn cache dir
npm config get store-dir
# set
npm config set cache ~/nodeCache/.npm
yarn config set cache-folder ~/nodeCache/.yarn
pnpm config set store-dir ~/nodeCache/.pnpm-store
```
