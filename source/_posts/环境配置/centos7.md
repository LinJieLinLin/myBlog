---
title: centos7
date: 2018-07-07 07:07:11
tags:
  - 配置
---

{% blockquote %} centos6.5 {% endblockquote %}

<!--more-->

## 自动网络对时

```
sudo yum -y install ntp
# 使用 ntpdate 测试 NTP
ntpdate pool.ntp.org
# 查看服务器时间
date
# 启动ntpd daemon，持续校准时间
systemctl start ntpd
```

## zip 相关

```shell
# 压缩
zip –q –r a.zip /home/wwwroot/a
# 解压缩 到当前目录
unzip a.zip
# 解压缩带参
unzip a.zip -q -d /home/a
```

## 解压缩

```shell
tar –xvf file.tar /www //解压 tar包
tar -xzvf file.tar.gz -c /www //解压tar.gz
tar -xjvf file.tar.bz2 //解压 tar.bz2
tar –xZvf file.tar.Z //解压tar.Z
unrar e file.rar //解压rar
unzip file.zip //解压zip
```

## [frp](https://github.com/fatedier/frp/releases)

```sh
# 安装
wget https://github.com/fatedier/frp/releases/download/v0.41.0/frp_0.41.0_linux_amd64.tar.gz
tar -xzvf frp_0.41.0_linux_amd64.tar.gz
# 设置
vim frps.ini
[common]
bind_addr = 0.0.0.0
bind_port = 7000
# 启用token认证
authentication_method = token
token = tokenKey
# web proxy,nginx proxy 7002
vhost_http_port = 7002
# 设置dashboard
dashboard_port = 7001
dashboard_user = userName
dashboard_pwd = password
!wq
# 启动
./frps -c ./frps.ini
# 
```

```ini
vim frpc.ini
[common]
server_addr = frps ip
server_port = 7000
token = tokenKey
log_file = ./frpc.log
[web_01]
type = http
local_ip = 127.0.0.1
local_port = 1000
use_compression = true
# 访问domain,nginx proxy 
custom_domains = f.lj4.top

[rdp]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
# 远程开放端口
remote_port = 3389

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 7003
# http代理
[plugin_http_proxy]
type = tcp
remote_port = 6004
plugin = http_proxy
plugin_http_user = abc
plugin_http_passwd = abc
# socks5 代理
[plugin_socks5]
type = tcp
remote_port = 7004
plugin = socks5
plugin_user = abc
plugin_passwd = abc
```

### server frps.ini

## 查看 centos 版本

```shell
cat /etc/redhat-release
```

## systemctl

### eg:nginx.service

```sh
#service配置文件分为[Unit]、[Service]、[Install]三个部分。

#[Unit]部分：指定服务描述、启动顺序、依赖关系，包括Description、Documentation、After、Before、Wants、Requires。
[Unit]
#Description指定当前服务的简单描述。
Description=nginx代理服务

#Documentation指定服务的文档，可以是一个或多个文档的URL，可选，一般不用配置该项。
Documentation=http://nginx.org/en/docs

#启动顺序，After和Before。
#注意，After和Before字段只涉及启动顺序，不涉及依赖关系。

#After表示当前服务在network.target之后启动，可以指定多个服务，以空格隔开。
After=network.target sshd.service
After=sshd-keygen.service

#Before表示当前服务在tomcat.target之前启动，可以设置多个，以空格隔开，可选，根据实际需要配置。
Before=tomcat.service

#依赖关系，Wants和Requires，可选，根据实际需要配置。
#Wants为"弱依赖"关系，即如果"mysqld.service"启动失败或停止运行，不影响nginx.service继续执行。
#Requires为"强依赖"关系，即如果"mysqld.service"启动失败或异常退出，那么nginx.service也必须退出。
#想要添加多个服务，可以多次使用此选项，也可以设置一个空格分隔的服务列表。
#注意，Wants与Requires只涉及依赖关系，与启动顺序无关，默认情况下是同时启动的。
Wants=mysqld.service
Requires=mysqld.service

#[Service]部分：指定启动行为，包括Type、EnvironmentFile、ExecStart、ExecReload、ExecStop、PrivateTmp。
[Service]
#Type指定服务的启动类型，必须为simple, exec, forking, oneshot, dbus, notify, idle 之一。常用simple和forking。
# simple（默认值）：ExecStart启动的进程为该服务主进程。
# exec：exec与simple类似，不同之处在于，只有在该服务的主服务进程执行完成之后，systemd才会认为该服务启动完成。 其他后继单元必须一直阻塞到这个时间点之后才能继续启动。
# forking：ExecStart将以fork()方式启动，此时父进程将会退出，子进程将成为主进程。
# oneshot：oneshot与simple类似，不同之处在于，只有在该服务的主服务进程退出之后，systemd才会认为该服务启动完成，才会开始启动后继单元。 此种类型的服务通常需要设置RemainAfterExit=选项。当Type= 与 ExecStart=都没有设置时，Type=oneshot 就是默认值。
# dbus：类似于simple，但会等待D-Bus信号后启动。
# notify：类似于simple，启动结束后会发出通知信号，然后 Systemd 再启动其他服务。
# idle：类似于simple，但是要等到其他任务都执行完，才会启动该服务。一种使用场合是为让该服务的输出，不与其他服务的输出相混合。
# 建议对长时间持续运行的服务尽可能使用Type=simple(这是最简单和速度最快的选择)。注意，因为simple类型的服务 无法报告启动失败、也无法在服务完成初始化后对其他单元进行排序，所以，当客户端需要通过仅由该服务本身创建的IPC通道(而非由systemd创建的套接字或D-bus之类)连接到该服务的时候，simple类型并不是最佳选择。在这种情况下， notify或dbus(该服务必须提供D-Bus接口)才是最佳选择， 因为这两种类型都允许服务进程精确的安排何时算是服务启动成功、何时可以继续启动后继单元。notify类型需要服务进程明确使用sd_notify()函数或类似的API，否则，可以使用forking作为替代(它支持传统的UNIX服务启动协议)。最后，如果能够确保服务进程调用成功、服务进程自身不做或只做很少的初始化工作(且不大可能初始化失败)，那么exec将是最佳选择。注意，因为使用任何 simple 之外的类型都需要等待服务完成初始化，所以可能会减慢系统启动速度。 因此，应该尽可能避免使用 simple 之外的类型(除非必须)。另外，也不建议对长时间持续运行的服务使用 idle 或 oneshot 类型。
Type=forking

#EnvironmentFile指定当前服务的环境参数文件。该文件内部的key=value键值对，可以用$key的形式，在当前配置文件中获取。
EnvironmentFile=/etc/nginx/nginx.conf

#启动命令
# ExecStart指定启动进程时执行的命令。
# ExecReload指定当该服务被要求重新载入配置时所执行的命令。另外，还有一个特殊的环境变量 $MAINPID 可用于表示主进程的PID，例如可以这样使用：/bin/kill -HUP $MAINPID。强烈建议将 ExecReload= 设为一个能够确保重新加载配置文件的操作同步完成的命令行。
# ExecStop指定停止服务时执行的命令。
# ExecStartPre指定启动服务之前执行的命令。不常用。
# ExecStartPost指定启动服务之后执行的命令。不常用。
# ExecStopPost指定停止服务之后执行的命令。不常用。
ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit

# 设为 true表示在进程的文件系统名字空间中挂载私有的 /tmp 与 /var/tmp 目录， 也就是不与名字空间外的其他进程共享临时目录。 这样做会增加进程的临时文件安全性，但同时也让进程之间无法通过 /tmp 或 /var/tmp 目录进行通信。
# 适用于web系统服务，不适用于mysql之类的数据库用户服务，数据库用户服务设为false。
PrivateTmp=true

#[Install]部分：指定服务的启用信息，只有在systemctl的enable与disable命令在启用/停用单元时才会使用此部分。
[Install]
# “WantedBy=multi-user.target”表示当系统以多用户方式（默认的运行级别）启动时，这个服务需要被自动运行。
WantedBy=multi-user.target
```

### 运行服务

``` shell
# 启动服务
systemctl start nginx
# 停止服务
systemctl stop nginx
# 重启服务
systemctl restart nginx
# 更新systemctl服务
systemctl daemon-reload
# 设置开机自启动
systemctl enable nginx
```

### 查看服务日志

```sh
# 查看服务日志
journalctl -f 
# 查看指定服务日志
journalctl -f -u nginx
```

## 开机启动脚本

```sh
vi /etc/rc.d/init.d/hi
#!/bin/bash
# hi:start|stop|restart
# chkconfig: 345 90 10
# description: bigdata
# processname: bigdata
/home/hi.sh
:wq
vim /home/hi.sh
echo hi
:wq
# 设置权限
chmod +x /etc/rc.d/init.d/hi
chmod +x /home/hi.sh
# 注册设置为开机启动
chkconfig --add hi
chkconfig hi on
# 启动服务
service hi start
# 修改sh后刷新
source /etc/profile
```

## nginx

```shell
sudo yum install nginx
sudo systemctl start nginx
```

## MYSQL

```shell
sudo rpm -ivh https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
sudo yum -y install mysql-community-server
sudo systemctl start mysqld
# 自启动
sudo systemctl enable mysqld
# 状态
sudo systemctl status mysqld
# 查看默认密码
cat /var/log/mysqld.log | grep -i 'temporary password'
# 配置mysql
mysql_secure_installation

```

## PHP

```shell
sudo  rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
sudo yum -y install php72w php72w-cli php72w-common php72w-devel php72w-embedded php72w-fpm php72w-gd php72w-mbstring php72w-mysqlnd php72w-opcache php72w-pdo php72w-xml php72w-process php-mysqli --skip-broken
# 查看已安装扩展
php -m
# 启动php-fpm
sudo service php-fpm start
# 检查启动是否成功
sudo service php-fpm status
# 设置开机自启动
sudo systemctl enable php-fpm.service
# 检查开机自启动是否设置成功
sudo systemctl list-dependencies | grep php-fpm
 ps -ef | grep php-fpm
# 查看监听端口
netstat -ant | grep 9000
```

## php nginx 配置

```shell
# 配置最后加上：
fastcgi_param  PHP_ADMIN_VALUE  "open_basedir=/home/php项目根目录/:/tmp/:/proc/";
```

## 安装 redis

```shell
yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
yum --enablerepo=remi install redis
# 开机启动
systemctl enable redis.service
```

## docker in centos7

### [docker-mongo](https://www.jianshu.com/p/2181b2e27021)

#### 常用命令

```shell
# 权限登录
docker exec -it mongo mongo admin -u linj -p
# 添加用户
db.createUser({ user: 'test', pwd: '123456', roles: [{ role: "readWrite", db: "test" }] });

```

#### 备份恢复

```shell
# 一.备份数据库：
# 方法一：进入mongodb容器：
docker exec -it 容器名 /bin/sh

# 执行备份指令：
mongodump -h ip  -d 数据库名 -o  容器存放备份数据的地址
# 注意：若容器内的存备份数据的地址没有被映射出来，则exit推出容器回到宿主机,
#           执行：
#           docker cp 容器名:容器内存备份数据的地址  宿主机的存放备份数据的地址
# 方法二：直接在宿主机执行导出操作：

#             将备份指令写入sh文件，建立宿主机和docker容器之间的联系
docker run --link 容器名:mongodb -v 容器存放备份数据的地址:宿主机存放导出文件的地址 mongo 宿主机存放sh文件的地址
# 例如：
docker run --link zks-mongo:mongodb -v /zks/db_backup:/zks/db_backup mongo /zks/db_backup/backupright.sh

# 二、导入数据库
#   将数据到入docker中mongodb,且mongodb已经存在这个数据库表
#   先删掉原来的的数据库表，否则，新导入进去的数据如果有一些和原来的数据重复就不能导入成功
#   删掉数据库表的步骤：
#   1.进入mongodb容器
#   2.执行mongo
#   3.查看有哪些数据库 show dbs
#   4.进入某个数据库 use 数据库名
#   5.查看数据库中有哪些表 show collections
#   6.删除数据库中的某个表 db.数据库表名.drop()

#   将要导入的数据库表放在容器映射到宿主机的路径下
#   执行：
  mongorestore -h mongodb容器的ip -d 要导入的数据库的表名 要导入的数据库表存放的路径
```

#### 默认数据地址

```shell
/var/lib/docker/volumes
```

### [yapi](https://www.jianshu.com/p/a97d2efb23c5)

```shell
docker run -it --rm \
 --link mongo:mongo \
 --entrypoint npm \
 --workdir /api/vendors \
 registry.cn-hangzhou.aliyuncs.com/anoy/yapi \
 run install-server

# 初始化管理员账号成功,账号名："admin@admin.com"，密码："ymfe.org"

docker run -d \
  --name yapi \
  --link mongo-yapi:mongo \
  --workdir /api/vendors \
  -p 3000:3000 \
  registry.cn-hangzhou.aliyuncs.com/anoy/yapi \
  server/app.js
```

### [jenkins](https://github.com/jenkinsci/docker/blob/master/README.md)

```shell
docker run --name jenkins -d -e JAVA_OPTS="-Duser.timezone=Asia/Shanghai" -v jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime -p 3002:8080 -p 50000:50000 jenkins/jenkins
```

### [gitlab](https://www.jianshu.com/p/24959481340e)

```shell
sudo docker run --detach \
    --hostname gitlab.gdtn.io \
    --publish 443:443 --publish 3003:80 --publish 23:22 \
    --name gitlab \
    --restart always \
    -v /etc/localtime:/etc/localtime \
    --volume /gitlab/config:/etc/gitlab \
    --volume /gitlab/logs:/var/log/gitlab \
    --volume /gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce
```

### [gitlab-runner](https://segmentfault.com/a/1190000011553991)

```shell
sudo docker run -d --name gitlab-runner --add-host=lj.io:127.0.0.1 --restart always   -v /root/lj/gitlab-runner/config:/etc/gitlab-runner   -v /var/run/docker.sock:/var/run/docker.sock   gitlab/gitlab-runner
```

### [gitlab-multi-runner](https://hub.docker.com/r/sameersbn/gitlab-ci-multi-runner)

```shell
sudo docker run -d --name gitlab-runner --add-host=lj.io:127.0.0.1 --restart always   -v /root/lj/gitlab-runner/config:/etc/gitlab-runner   -v /var/run/docker.sock:/var/run/docker.sock   gitlab/gitlab-runner
```

### [mysql](http://www.runoob.com/docker/docker-install-mysql.html)

```shell
docker pull mysql
sudo docker run -p 3306:3306 --name mysql -v /opt/docker_v/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```

### 构建容器

```shell
# 根据DockerFile将当前目录构建镜像
docker build -t 容器名称:v1.0 .
# 根据docker-compose.yml
docker-compose up -d
```

### 容器开机启动

```shell
# 没有使用到 --link的容器使用
docker update --restart=always xxx
# 取消启动
docker update --restart=no xxx
```

### 导出容器信息

```shell
docker inspect name/id
```

### 修改容器 host

```shell
# 创建容器时添加
--add-host= lj.io:127.0.0.1
```

### 修改容器时区

```shell
-v /etc/localtime:/etc/localtime
```

### 进入容器 shell

```shell
docker exec -it [name] /bin/bash
```

## centos7 kms

```sh
#下载包
wget https://github.com/Wind4/vlmcsd/releases/download/svn1111/binaries.tar.gz
tar -zxvf binaries.tar.gz
#进入路径
cd binaries/Linux/intel/static
#运行KMS服务
chmod 777 vlmcsd-x64-musl-static
./vlmcsd-x64-musl-static
# 查看
ps -ef | grep vlmcsd-x64-musl-static
# 停用
kill -9 [pid]
firewall-cmd --zone=public --add-port=1688/tcp --permanent
firewall-cmd --reload
```

## centos7 kms2

```sh
#! /bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
clear
start() {
  yum install gcc git make -y
  mkdir /usr/local/kms
  cd /usr/local/kms
  git clone https://github.com/Wind4/vlmcsd.git ./vlmcsdGit
  cd vlmcsdGit
  make
  cd bin
  mv vlmcsd /usr/local/kms/vlmcsd
  cd /usr/local/kms/
  rm -rf ./vlmcsdGit/
  echo "Succeeded."
  echo "The executable file lies in /usr/local/kms/"
  echo "https://github.com/Wind4/vlmcsd"
}
echo "This script will automatically download and compile KMS Server program for you."
echo "For more information, please visit https://github.com/Wind4/vlmcsd"
read -p "y/n:" choice
case $choice in
"y")
  start
  ;;
"n")
  exit 0
  ;;
*)
  echo "Please enter y or n!"
  ;;
esac
```
