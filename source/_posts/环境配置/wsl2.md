---
title: wsl2
date: 2024-06-02 00:03:40
tags:
  - MD
---

{% blockquote %} wsl2 相关 {% endblockquote %}

<!--more-->

## 启用 WSL

```powershell
# 管理员运行
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
# 内核更新包 https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
# 将 WSL 2 设置为默认版本
wsl --set-default-version 2
# 启用虚拟化 hyper
# 系统-可选功能-更多windows功能-勾选Hyper-V
```

## 常用命令

```bash
# 运行的WSL
wsl --list --running
# 关闭wsl
wsl --shutdown
# 已安装的WSL发行版
wsl --list --verbose
```

## 默认使用 root

```
# 设置root密码
sudo passwd root
# win设置WSL使用 root
# powershell
ubuntu1804.exe -v
ubuntu1804.exe config --default-user root
```

## win 用户文件夹下全局 wsl2 配置.wslconfig

```bash
# .wslconfig
[experimental]
# 设置网络模式为镜像模式
networkingMode=mirrored
# 启用 DNS 隧道
dnsTunneling=true
# 启用防火墙
firewall=true
# 禁用自动代理
autoProxy=false
# 启用主机地址回环 开启 localhost访问
hostAddressLoopback=true
```

## wsl2 内部配置

```bash
# vi /etc/wsl.conf
# 当发行版启动时自动挂载Windows驱动器
[automount]

# 设置为true将自动挂载固定驱动器（C:/ 或 D:/）到上面设置的根目录下使用DrvFs。设置为false意味着驱动器不会自动挂载，需要手动挂载或使用fstab。
# enabled = true

# 设置自动挂载固定驱动器的目录。此示例更改挂载位置，因此您的C驱动器将是/c，而不是默认的/mnt/c。
# root = /

# 可以指定DrvFs特定的选项。
# options = "metadata,uid=1003,gid=1003,umask=077,fmask=11,case=off"

# 设置在WSL发行版启动时处理的`/etc/fstab`文件。
# mountFsTab = true

# 网络主机设置，启用WSL 2使用的DNS服务器。此示例更改主机名，将generateHosts设置为false，防止WSL默认生成/etc/hosts，将generateResolvConf设置为false，防止WSL自动生成/etc/resolv.conf，以便您可以创建自己的（例如nameserver 1.1.1.1）。
[network]
# hostname = DemoHost
# generateHosts = false
# generateResolvConf = false

# 设置WSL是否支持互操作进程，如启动Windows应用程序和添加路径变量。将这些设置为false将阻止启动Windows进程和阻止添加$PATH环境变量。
[interop]
# 阻止启动Windows进程
enabled = false
# 阻止添加$PATH环境变量
appendWindowsPath = false

# 设置使用WSL启动发行版时的用户。
[user]
# default = DemoUser

# 设置启动新WSL实例时运行的命令。此示例启动Docker容器服务。
[boot]
# command = service docker start
```

## 设置当前用户使用 sudo 不用输入密码

```sh
sudo visudo
# 输入密码，在最后一行添加：username为当前用户名
username ALL=(ALL) NOPASSWD:ALL
# ctrl+s ctrl+x 保存退出
```
