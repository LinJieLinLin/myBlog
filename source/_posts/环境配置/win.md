---
title: win CMD
date: 2016-07-07 07:07:10
tags: 
- 配置
---
{% cq %} win命令行相关 {% endcq %}
<!--more-->
# 不显示CMD窗口
`CreateObject("WScript.Shell").Run "CMD脚本",0`
# 查看端口占用
`
netstat -aon|findstr "1119"
LISTENING 后面即为PID
`
# 查看PID对应exe
`tasklist|findstr "PID"`
# 暂停10秒
`ping localhost -n 10 > nul`
# 空格暂停
`pause /s`
# ARP 绑定
`arp -s ip mac`
# 查看ARP
`arp -a`
# 文件夹映射
>mklink 只能在命令提示符 “CMD” 中使用。
```
mklink [[/d] | [/h] | [/j]] Link Target
/d　　　创建目录符号链接。黙认为文件符号链接。
/h　　　创建硬链接，而不是符号链接。
/h　　　创建目录联接。
Link　　指定新的符号链接名称。
Target　指定新链接引用的路径(相对或绝对)。
eg: mklink /d c:\a d:\a
```

