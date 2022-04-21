---
title: node
date: 2022-04-13 20:05:34
tags:
  - 配置
  - node
---

{% blockquote %} node {% endblockquote %}

<!--more-->

## [nvm](https://github.com/coreybutler/nvm-windows)

``` shell
# 安装目录
nvm root
# 安装版本
nvm install v14.15.3
# 默认版本
nvm use 14.15.3
```

## npm配置

``` shell
# puppeteer下载源
npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
# 指定npm源
npm i nrm --registry=https://registry.npm.taobao.org
# 修改package.json script配置
npm set-script postinstall "npx husky install"
# 配置npm init 默认属性
npm set init.license "Apache-2.0"
npm set init.author.email  "993353454@qq.com"
npm set init.author.name  "linjielinlin"
```

## [nvs](https://github.com/jasongin/nvs/releases)

### 修改默认源 vim ./defaults.json

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

## [degit](https://www.npmjs.com/package/degit) 复制git仓库代码，非clone模式

```sh
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
```

## 修改package.json

```shell
# 替换并保存文件
sed -i -r 's/查找文本/替换文本/g' package.json
# 查找并删除所在行(可多行)
sed -i -r  '/"b"/d' package.json
```
