---
title: mac
date: 2024-07-07 07:07:10
tags:
  - 配置
---

{% blockquote %} mac 相关 {% endblockquote %}

<!--more-->

## chrome 启动参数

```sh
# 不遵守同源策略。
--disable-web-security
# window edge demo: 快捷方式-目标
# "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --disable-web-security --user-data-dir=D:\linj\tmp\edge
# mac shell
/Applications/Microsoft\ Edge.app/Contents/MacOS/Microsoft\ Edge --user-data-dir="/Users/linj/tem/edgeDebug" --disable-web-security --auto-open-devtools-for-tabs

```

[Chrome 浏览器启动参数大全（命令行参数）](https://blog.csdn.net/bigcarp/article/details/121142873)
