---
title: lerna相关
date: 2022-03-13
tags:
  - 配置
  - lerna
  - 构建
---

{% blockquote %} lerna相关 {% endblockquote %}

<!--more-->

# [lerna](https://github.com/lerna/lerna)

## 运行子包命令

```shell
lerna run --scope 包名 dev
```

## 查看包

```shell
lerna ls -a
# 只能查看子包
lerna ls
```

## 安装所有子包依赖

```shell
lerna bootstrap 
```

## 为所有子包添加一个 "共同 "的依赖

```shell
lerna add husky --dev 
# 把依赖关系添加到工作区根目录
lerna add husky --dev -W 
```

## 删除依赖

```shell
lerna exec -- yarn remove husky
# 删除所有依赖
lerna clean
```
