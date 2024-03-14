---
title: node
date: 2022-04-13 20:05:34
tags:
  - 配置
  - node
---

{% blockquote %} node {% endblockquote %}

<!--more-->

## npm 配置

```shell
# puppeteer下载源
npm config set puppeteer_download_host=https://registry.npmmirror.com/mirrors
# 指定npm源
npm i nrm --registry=https://registry.npmmirror.com
npm config set registry https://registry.npmmirror.com
# 获取配置文件路径
npm config get userconfig
# 修改package.json script配置
npm set-script postinstall "npx husky install"
# 配置npm init 默认属性
npm set init-license "Apache-2.0"
npm set init-author-email  "993353454@qq.com"
npm set init-author-name  "linjielinlin"
# 设置缓存
npm config set cache  E:\cache\npm
# 跳过脚本安装
npm i puppeteer --ignore-scripts
```

## yarn 配置

```sh
# yarn配置位置
**/.yarnrc
# 设置缓存目录
yarn cache clean
yarn config set E:\cache\yarn
yarn config set registry https://registry.npmmirror.com
yarn config set sass_binary_site https://registry.npmmirror.com/mirrors/node-sass/
# 跳过脚本安装
yarn --ignore-scripts
```

## pnpm 配置

```sh
#启用corepack
corepack enable
# 安装pnpm指定版本
corepack prepare pnpm@8.3.1 --activate
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
nvs remote taobao https://cdn.npmmirror.com/binaries/node/
nvs remote default taobao
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
npm i nrm  yrm eslint degit prettierrc stylelint   http-server cross-env  -g --registry=https://registry.npmmirror.com
```

## [nvm](https://github.com/coreybutler/nvm-windows)

```shell
# 安装目录
nvm root
# 安装版本
nvm install v14.15.3
# 默认版本
nvm use 14.15.3
```

## [degit](https://www.npmjs.com/package/degit) 复制 git 仓库代码，非 clone 模式

````sh
# github
degit user/repo
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo
# download from GitLab
degit gitlab:user/repo
degit git@gitlab.com:user/repo
degit https://gitlab.com/user/repo

# download from BitBucket
degit bitbucket:user/repo
degit git@bitbucket.org:user/repo
degit https://bitbucket.org/user/repo

# download from Sourcehut
degit git.sr.ht/user/repo
degit git@git.sr.ht:user/repo
degit https://git.sr.ht/user/repo
# branch
degit user/repo#dev
# release tag
degit user/repo#v1.2.3
# commit hash
degit user/repo#1234abcd
## npm 配置

```shell
# puppeteer下载源
npm config set puppeteer_download_host=https://registry.npmmirror.com/mirrors
# 指定npm源
npm i nrm --registry=https://registry.npmmirror.com
yarn config get registry
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
````

## 缓存目录设置

```shell
# 默认位置
# npm: /root/.npm
# yarn: /usr/local/share/.cache/yarn
# pnpm: /root/.pnpm-store/v3
# get
npm config get cache
yarn cache dir
yarn config get cache-folder
npm config get store-dir
# set
npm config set cache ~/nodeCache/.npm
yarn config set cache-folder ~/nodeCache/.yarn
pnpm config set store-dir ~/nodeCache/.pnpm-store
## 修改package.json
# 替换并保存文件
sed -i -r 's/查找文本/替换文本/g' package.json
# 查找并删除所在行(可多行)
sed -i -r  '/"b"/d' package.json
```

## npm ele cdn

```sh
# npm包cdn链接
https://npm.elemecdn.com/lj-utils/package.json
```

## node-sass

```sh
# windows
npm config set sass-binary-site=http://registry.npmmirror.com/mirrors/node-sass
手动指定
npm i node-sass --sass_binary_site=https://registry.npmmirror.com/mirrors/node-sass/
yarn add node-sass --sass_binary_site=https://registry.npmmirror.com/mirrors/node-sass/
npm i -D node-sass --sass_binary_path=D:\files\win32-x64-72_binding.node
```
