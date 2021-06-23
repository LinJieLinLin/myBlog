---
title: appium-androidUi测试
date: 2016-07-07 07:07:11
tags:
  - 测试
---

{% blockquote %} appium-androidUi 测试环境搭建 {% endblockquote %}

<!--more-->

# 工具准备

## [appium](http://appium.io/)

## [JAVA](https://www.java.com/zh_CN/)

## [AndroidSDK](http://sdk.android-studio.org/)

## 配置环境

### 确认 JAVA 环境变量，没有则添加

```
// 测试
java -version
```

### 设置 AndroidSDK 环境变量

```
// 测试
adb devices
```

## 连接真机

> 手机打开开发者模式，允许调试，允许 USB 安装程序
> 下载谷歌框架，安卓最新版 Chrome（调试 webview）

## 使用 node.js 编写测试代码

> 安装 node.js,安装依赖

```
npm i wd,... -g
```
