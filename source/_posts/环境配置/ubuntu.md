---
title: ubuntu16.04
date: 2016-12-01 01:01:01
tags: 
- 配置
---
{% cq %} ubuntu相关 {% endcq %}
<!--more-->

# 软件
## 翻

* install [shadowsocks-qt5](https://github.com/shadowsocks/shadowsocks-qt5/wiki/%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97)

```
sudo add-apt-repository ppa:hzwhuang/ss-qt5
sudo apt-get update
sudo apt-get install shadowsocks-qt5
```

* install polipo(将socks5转为http)

``` 
sudo apt-get install polipo
sudo vim /etc/polipo/config

SET:
logSyslog = true
logFile = /var/log/polipo/polipo.log

proxyAddress = "0.0.0.0"
# socks5 ip:port
socksParentProxy = "127.0.0.1:1080"
socksProxyType = socks5
proxyPort = 7777

chunkHighMark = 50331648
objectHighMark = 16384
serverMaxSlots = 64
serverSlots = 16
serverSlots1 = 32
END SET

sudo /etc/init.d/polipo restart
```
* 查看代理状态

```
export http_proxy="http://127.0.0.1:7777/"
curl ip.gs
```
* npm设置代理

```
npm config set proxy=http://127.0.0.1:7777
```

* shell全局代理：

```
export http_proxy="http://127.0.0.1:7777/"
```


## node相关
* install nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
vim ~/.profile
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
wq
source ~/.profile
NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install stable
```
* install nrm

```
npm --registry https://registry.npm.taobao.org install nrm -g
```

* 使用cnpm源

```
nrm ls
nrm use cnpm
npm install -g bower gulp http-server
```

## 五笔拼音
```
sudo apt-get install fcitx-table-wbpy
```
## 主题
* unity-tweak-tool

```
sudo apt-get install unity-tweak-tool 
```
* Flatabulous主题

```
sudo add-apt-repository ppa:noobslab/themes
sudo apt-get update
sudo apt-get install flatabulous-theme
```

* 图标

```
sudo add-apt-repository ppa:noobslab/icons
sudo apt-get update
sudo apt-get install ultra-flat-icons
```

> 进入unity-tweak-tool修改主题为Flatabulous，图标为ultra-flat

## 去掉登陆密环提示

```
seahorse 
# 选中修改密码，输入旧密码后不输密码即可
```

## git-ssh
```
cd ~/.ssh
ssh-keygen -t rsa -C "993353454@qq.com"
//输入文件名eg: a
ssh-add a
// 将生成的a.pub内容放到github的 add sshkey 里
// 注： 如果执行 ssh-add 时显示错误 Could not open a connection to your authentication agent. 那么执行
eval `ssh-agent -s`
// 测试连接
ssh -T git@github.com
```

### 多个ssh key
```
vim ~/.ssh/config
Host eg.github.com  
    HostName a.github.com  
    User linj  
    IdentityFile ~/.ssh/a  

Host bbbb.github.com  
    HostName b.github.com  
    User linjielinlin  
    IdentityFile ~/.ssh/b
esc wq

// 列出ssh key
ssh-add -l
// 清空ssh-key
ssh-add -D
```

## 添加软件图标到启动器
```
$ Exec=bash 软件路径
```

## 更改文件/文件夹所有者
```
sudo chown -R root:root 文件/文件夹
```

## 建立软连接
```
ln -s 源目录 目标目录（绝对路径）
```
## 新建用户
```
adduser linj
# 输入密码，然后一路回车，按y
# 添加root权限
vim /etc/sudoers
```

# 配置链接
## [ubuntu-nginx-ssl](https://www.codecasts.com/blog/post/secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)



