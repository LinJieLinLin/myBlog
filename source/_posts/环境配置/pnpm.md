---
title: pnpm
date: 2022-03-20
tags:
  - 配置
  - pnpm
  - 构建
---

{% blockquote %} pnpm {% endblockquote %}

<!--more-->

# [pnpm](https://pnpm.io/zh/)

## workspace,一个 workspace 的根目录下必须有 pnpm-workspace.yaml 文件

``` yaml
packages:
  - 'packages/**'
```

## pnpm link

``` shell
# 在新项目下引用本地包
pnpm link <要引用包的path>
# 取消引用
pnpm unlink <要引用包的path>
```

## 更新包

``` shell
# 遵循 package.json 指定的范围更新所有的依赖项
pnpm up
# 更新所有依赖项，此操作会忽略 package.json 指定的范围 慎用
pnpm up --latest
# 将 foo 更新到 v2 上的最新版本
pnpm up foo@2
# 更新 @babel 范围内的所有依赖项
pnpm up "@babel/*"
```

## 安装所有子包依赖

```shell
pnpm i 
```

## 删除依赖

```shell
# 从 node_modules 和项目的 package.json 中移除包。
pnpm rm foo
```
