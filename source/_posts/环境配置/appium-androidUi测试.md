---
title: appium-androidUi测试
tags: 
- 测试
---
{% cq %} appium-androidUi测试环境搭建 {% endcq %}
<!--more-->
#  工具准备
## [appium](http://appium.io/)
## [JAVA](https://www.java.com/zh_CN/)
## [AndroidSDK](http://sdk.android-studio.org/)
## 配置环境
### 确认JAVA环境变量，没有则添加
```
// 测试
java -version
```
### 设置AndroidSDK环境变量
```
// 测试
adb devices
```
## 连接真机
> 手机打开开发者模式，允许调试，允许USB安装程序
下载谷歌框架，安卓最新版Chrome（调试webview）

## 使用node.js编写测试代码
> 安装node.js,安装依赖
```
npm i wd,... -g
```




