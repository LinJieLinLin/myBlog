---
title: ubuntu
date: 2018-08-02 00:03:54
tags:
  - 配置
---

{% blockquote %} ubuntu {% endblockquote %}

<!--more-->

# [linux](https://lj4.top/myBlog/2016/07/07/%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE/linux/)

# 软件

## 翻

- install [shadowsocks-qt5](https://github.com/shadowsocks/shadowsocks-qt5/wiki/%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97)

```
sudo add-apt-repository ppa:hzwhuang/ss-qt5
sudo apt-get update
sudo apt-get install shadowsocks-qt5
```

- install polipo(将 socks5 转为 http)

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

- 查看代理状态

```
export http_proxy="http://127.0.0.1:7777/"
curl ip.gs
```

- npm 设置代理

```
npm config set proxy=http://127.0.0.1:7777
```

- node sass

```
# windows
npm config set sass-binary-site=http://npm.taobao.org/mirrors/node-sass
```

- shell 全局代理：

```
export http_proxy="http://127.0.0.1:7777/"
```

## node

- install nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
vim ~/.profile
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
# wq
# 使用淘宝源
~/.bashrc
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
# wq
source ~/.profile
NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install stable
```

- install nrm

```
npm --registry https://registry.npm.taobao.org install nrm -g
```

- 使用 cnpm 源

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

- unity-tweak-tool

```
sudo apt-get install unity-tweak-tool
```

- Flatabulous 主题

```
sudo add-apt-repository ppa:noobslab/themes
sudo apt-get update
sudo apt-get install flatabulous-theme
```

- 图标

```
sudo add-apt-repository ppa:noobslab/icons
sudo apt-get update
sudo apt-get install ultra-flat-icons
```

> 进入 unity-tweak-tool 修改主题为 Flatabulous，图标为 ultra-flat

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

### 多个 ssh key

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

## ssh 远程

```
sudo apt install openssh-server
sudo rm -r /etc/ssh/ssh*key
# 使用
sudo dpkg-reconfigure openssh-server
# 或使用二选一
sudo ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
sudo ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key
sudo ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key
# 客户端生成ssh
ssh-keygen -t rsa -P ''
# 将客户端公钥id_rsa.pub复制到服务端
scp ~/.ssh/id_rsa.pub user@192.168.1.140:~
# 将上传到服务端的公钥添加到~/.ssh/authorzied_keys之中
cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
# 服务端开启key登录
sudo vim /etc/ssh/sshd_config
# 打开选项 PubkeyAuthentication yes
# 打开选项 AuthorizedKeysFile
sudo service ssh restart
```

## 添加软件图标到启动器

```
Exec=bash 软件路径
```

# 配置链接

## [ubuntu-nginx-ssl](https://www.codecasts.com/blog/post/secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)

# 定时任务

## crontab

```
运行命令crontab -e打开crontab的任务添加命令
实例1：每1分钟执行一次command
命令：

* * * * * command



实例2：每小时的第3和第15分钟执行

命令：

3,15 * * * * command



实例3：在上午8点到11点的第3和第15分钟执行

命令：

3,15 8-11 * * * command



实例4：每隔两天的上午8点到11点的第3和第15分钟执行

命令：

3,15 8-11 */2 * * command



实例5：每个星期一的上午8点到11点的第3和第15分钟执行

命令：

3,15 8-11 * * 1 command



实例6：每晚的21:30重启smb

命令：

30 21 * * * /etc/init.d/smb restart



实例7：每月1、10、22日的4 : 45重启smb

命令：

45 4 1,10,22 * * /etc/init.d/smb restart



实例8：每周六、周日的1 : 10重启smb

命令：

10 1 * * 6,0 /etc/init.d/smb restart



实例9：每天18 : 00至23 : 00之间每隔30分钟重启smb

命令：

0,30 18-23 * * * /etc/init.d/smb restart



实例10：每星期六的晚上11 : 00 pm重启smb

命令：

0 23 * * 6 /etc/init.d/smb restart



实例11：每一小时重启smb

命令：

* */1 * * * /etc/init.d/smb restart



实例12：晚上11点到早上7点之间，每隔一小时重启smb

命令：

* 23-7/1 * * * /etc/init.d/smb restart



实例13：每月的4号与每周一到周三的11点重启smb

命令：

0 11 4 * mon-wed /etc/init.d/smb restart



实例14：一月一号的4点重启smb

命令：

0 4 1 jan * /etc/init.d/smb restart

实例15：每小时执行/etc/cron.hourly目录内的脚本

命令：

01   *   *   *   *     root run-parts /etc/cron.hourly
```

## 修改为阿里源

```
sudo mv /etc/apt/sources.list /etc/apt/sources.list.bak
sudo vim /etc/apt/sources.list

## 复制以下
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse

# 更新
sudo apt update
sudo apt upgrade
```

## apt 命令

```
sudo apt-get update  更新源
sudo apt-get install package 安装包
sudo apt-get remove package 删除包
sudo apt-cache search package 搜索软件包
sudo apt-cache show package  获取包的相关信息，如说明、大小、版本等
sudo apt-get install package --reinstall  重新安装包
sudo apt-get -f install  修复安装
sudo apt-get remove package --purge 删除包，包括配置文件等
sudo apt-get build-dep package 安装相关的编译环境
sudo apt-get upgrade 更新已安装的包
sudo apt-get dist-upgrade 升级系统
sudo apt-cache depends package 了解使用该包依赖那些包
sudo apt-cache rdepends package 查看该包被哪些包依赖
sudo apt-get source package  下载该包的源代码
sudo apt-get clean && sudo apt-get autoclean 清理无用的包
sudo apt-get check 检查是否有损坏的依赖
```

## 修改 host

```
sudo vim /etc/hosts
```

# WSL

## 开机启动脚本

```
# win+r shell:startup
# 编辑 ubuntu.vbs
set ws=wscript.createobject("wscript.shell")
ws.run "C:\Windows\System32\bash.exe",0
ws.run "C:\Windows\System32\bash.exe  -c 'sudo /root/init.sh'",0
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

# PHP

## fastadmin

```
# 依赖
sudo apt-get install php7.2-zip php7.2-gd -y
sudo service php7.2-fpm restart
# composer
sudo apt install composer -y
# 使用镜像
composer config -g repo.packagist composer https://packagist.phpcomposer.com
# 开启debug，修改 /fastadmin/application/config.php
# 关于没有权限（线上这样设置）
chown www:www /var/www/fastadmin -R
chmod 655 /var/www/fastadmin -R
chmod u+w /var/www/fastadmin/runtime -R
chmod u+w /var/www/fastadmin/public/upload -R
# 强制重新安装
php think install -u 数据库用户名 -p 数据库密码 --force=true
```

# android ubuntu18.04

## mysql

```
# 开启这个才能启动mysql
usermod -a -G aid_inet,aid_net_raw mysql
# 配置mysql
sudo mysql_secure_installation
# 设置root 密码
y y y n y
# 允许设置简单密码
set global validate_password_policy=0;
set global validate_password_length=4;
# 创建用户
CREATE USER 'linj'@'%' IDENTIFIED BY '123456';
# del
drop user 'linj'@'%';
# 全部权限
grant all on *.* to  'linj'@'%' identified by '123456';
# 设置test数据库全部权限
grant all on test.* to  'linj'@'%' identified by '123456';
# 修改远程登录
update mysql.user set host='%' where user='linj';
# 刷新权限
flush privileges;
```

## php(arm64 android)

> php 环境下运行 curl get 请求返回 false
