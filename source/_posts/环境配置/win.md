---
title: win CMD
date: 2018-07-07 07:07:10
tags:
  - 配置
---

{% blockquote %} win 命令行相关 {% endblockquote %}

<!--more-->

# 设置代理

`set http_proxy=http://127.0.0.1:7777`

# 不显示 CMD 窗口

`CreateObject("WScript.Shell").Run "CMD脚本",0`

# 查看端口占用

`netstat -aon|findstr "1119" LISTENING 后面即为PID`

# 查看 PID 对应 exe

`tasklist|findstr "PID"`

# 暂停 10 秒

`ping localhost -n 10 > nul`

# 空格暂停

`pause /s`

# ARP 绑定

`arp -s ip mac`

# 查看 ARP

`arp -a`

# 文件夹映射

> mklink 只能在命令提示符 “CMD” 中使用。

```
mklink [[/d] | [/h] | [/j]] Link Target
/d　　　创建目录符号链接。黙认为文件符号链接。
/h　　　创建硬链接，而不是符号链接。
/h　　　创建目录联接。
Link　　指定新的符号链接名称。
Target　指定新链接引用的路径(相对或绝对)。
eg: mklink /d 新路径 源路径
```
