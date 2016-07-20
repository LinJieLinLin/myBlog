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


