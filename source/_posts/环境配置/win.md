---
title: win CMD
date: 2018-07-07 07:07:10
tags:
  - 配置
---

{% blockquote %} win 命令行相关 {% endblockquote %}

<!--more-->

## 查看系统版本、激活状态

```
slmgr /dlv
```

## kms 激活 [win kms key](https://docs.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys)

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

## echo 输入文件

```Shell
# 将内容写入.npmrc中，若不存在文件则生成
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
// 临时添加环境变量
set path=%path%;D:\
// 永久环境变量，需要以管理员身份打开cmd
setx path %path%;路径 /M
```

## 不显示 CMD 窗口运行脚本

```shell
# 0后台 1普通 2最小化 3最大化
CreateObject("WScript.Shell").Run """CMD脚本""",0
```

## 查看端口占用

```sh
# 后面即为PID
netstat -aon|findstr "1119"
netstat -ano|findstr "443"
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

## cmd 脚本中文乱码（使用 ANSI 编码保存即可）

## smba 共享设置

```sh
# 删除smba共享连接
net use \\192.168.2.1 /delete
# 创建smba共享连接
net use \\192.168.2.1 "password" /user:userName
# 打开共享文件夹，带中文时，使用ANSI编码保存
explorer "\\192.168.2.1\分享"
```

## nginx

### nginx 服务

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

## hyper-v

```shell
# 管理员身份 关
bcdedit /set hypervisorlaunchtype off
# 管理员身份 开
bcdedit /set hypervisorlaunchtype auto
```

## 设置 DNS

```shell
netsh interface ip set address name="WLAN" source=dhcp
netsh interface ip set dns name="WLAN" source=static addr=223.6.6.6 register=primary
netsh interface ip add dns name="WLAN" addr=8.8.8.8 index=2
# 刷新dns
ipconfig /flushdns
```

## wsl2 启动不了处理

```shell
netsh winsock reset
```

Netsh winsock reset 是一个命令提示程序，用于将 winsock 目录重置为默认设置或清除状态。如有时候上不了网或者网络出现问题经常用到它，简单地理解就是：重置程序通过操作系统链接网络的入口点。虽然使用此命令可以恢复网络连接，也应谨慎使用，因为可能需要重新安装 LSP LSP: layered service privider 分层服务提供商。 LSP 是 TCP/IP 等协议的接口。

Netsh Winsock 解决了哪些问题？删除广告软件，间谍软件，病毒，蠕虫，木马等后的网络问题

处理安装广告软件，间谍软件，VPN 或防火墙后无法联网。无法访问任何网页或只能访问某些网页。出现与网络相关问题的弹出错误窗口。由于注册表错误，没有网络连接。发生 DNS 查找问题。无法续订网络适配器的 IP 地址或其他一些 DHCP 错误。没有连接消息的网络连接问题。

## win11 匿名共享

```
1、网络和internet-高级网络设置-高级共享设置-所有网络-密码保护的共享打开
```

## [rdpwrap](https://github.com/stascorp/rdpwrap) [最新配置](https://raw.githubusercontent.com/sebaxakerhtc/rdpwrap.ini/master/rdpwrap.ini)

```cmd
<!-- run -->
RDPWInst.exe
<!-- config -->
C:\Program Files\RDP Wrapper\rdpwrap.ini
```

## 任务计划程序

```cmd
schtasks /create /tn "name" /tr "D:\a.cmd" /sc onstart /ru SYSTEM
```
