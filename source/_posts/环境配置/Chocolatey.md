---
title: Chocolatey
date: 2024-12-09 00:03:54
tags:
  - MD
---

{% blockquote %} Chocolatey 相关 {% endblockquote %}

<!--more-->

## [安装](https://chocolatey.org/install#individual)

```powershell
# 当前用户运行权限
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# 查看配置文件
notepad $PROFILE

# 添加配置：
Invoke-Expression (oh-my-posh --init --shell pwsh --config " C:\Program Files (x86)/oh-my-posh/themes/themename.omp.json")
```

### [包搜索](https://community.chocolatey.org/packages)

### 常用命令

```powershell
# 列出源
choco source list
# 添加清华源
choco source add --name="Tsinghua University" --source="https://mirrors.tuna.tsinghua.edu.cn/chocolatey/" --priority=1
# 修改默认源
notepad $env:ChocolateyInstall\config\chocolatey.config
```

```powershell
# 管理员安装
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## oh-my-posh

### install

```powershell
# 使用choco
choco install oh-my-posh -y
# 使用winget
winget install JanDeDobbeleer.OhMyPosh -s winget
```

### 插件

```powershell
Install-Module ZLocation -Scope CurrentUser
```
