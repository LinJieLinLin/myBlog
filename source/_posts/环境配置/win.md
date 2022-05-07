---
title: win CMD
date: 2018-07-07 07:07:10
tags:
  - 配置
---

{% blockquote %} win 命令行相关 {% endblockquote %}

<!--more-->

## 查看系统版本、激活状态

`slmgr /dlv`

## kms激活 [win kms key](https://docs.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys)

### win

```shell
# 卸载旧key
slmgr /upk
# 安装key
slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx
slmgr /skms kms.03k.org
slmgr /ato
# 查看激活过期时间
slmgr –xpr
# 查看帮助
slmgr 
```

### [office](https://docs.microsoft.com/zh-cn/DeployOffice/vlactivation/gvlks)

```shell
# set Key
cscript ospp.vbs /inpkey:XXXXX-XXXXX-XXXXX-XXXXX
# office path
cd "C:\Program Files\Microsoft Office\Office16"
cscript ospp.vbs /sethst:kms.03k.org
cscript ospp.vbs /act
```

### 版本转换

```shell
# //获取当前的映像版本
dism /online /get-currentedition  
# //获取当前的映像可以升级的版本 
dism /online /get-targeteditions   
# win
DISM /online /Set-Edition:<edition ID> /ProductKey:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /AcceptEula 
```

## echo输入文件

``` Shell
# 奖内容写入.npmrc中，若不存在文件则生成
echo registry= > /root/.npmrc
# 向文件追加内容,会换行
echo https://registry.npmmirror.com/ >> /root/.npmrc
```

## 设置代理

```shell
set http_proxy=http://127.0.0.1:7777
```

## 使用环境变量

```CMD
echo %path%
```

## 不显示 CMD 窗口运行脚本

```shell
# 0后台 1普通 2最小化 3最大化
CreateObject("WScript.Shell").Run """CMD脚本""",0
```

## 查看端口占用

```sh
netstat -aon|findstr "1119" LISTENING 后面即为PID
```

## 查看 PID 对应 exe

`tasklist|findstr "PID"`

## 暂停 10 秒

`ping localhost -n 10 > nul`

## 空格暂停

`pause /s`

## ARP 绑定

`arp -s ip mac`

## 查看 ARP

`arp -a`

## 文件夹映射

> mklink 只能在命令提示符 “CMD” 中使用。

```shell
mklink [[/d] | [/h] | [/j]] Link Target
/d　　　创建目录符号链接。黙认为文件符号链接。
/h　　　创建硬链接，而不是符号链接。
/h　　　创建目录联接。
Link　　指定新的符号链接名称。
Target　指定新链接引用的路径(相对或绝对)。
eg: mklink /d 新路径 源路径
```

## cmd脚本中文乱码（使用ANSI编码保存即可）

## smba共享设置

```sh
# 删除smba共享连接
net use \\192.168.2.1 /delete
# 创建smba共享连接
net use \\192.168.2.1 "password" /user:userName
# 打开共享文件夹，带中文时，使用ANSI编码保存
explorer "\\192.168.2.1\分享"
```

## nginx

### nginx服务

```sh
```

### 　命令

```sh
# 查看帮助信息
nginx -h
# 查看Nginx版本
nginx -v
# 停用Nginx
nginx -s stop
# 优雅的停用Nginx（处理完正在进行中请求后停用）
nginx -s quit
# 重新加载配置，并优雅的重启进程
nginx -s reload
# 重启日志文件
nginx -s reopen
# 杀进程
tskill nginx
```
