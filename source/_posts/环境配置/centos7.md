---
title: centos7
date: 2016-07-07 07:07:11
tags:
  - 配置
---

{% cq %} centos6.5 {% endcq %}

<!--more-->

# 自动网络对时

```
sudo yum -y install ntp
# 使用 ntpdate 测试 NTP
ntpdate pool.ntp.org
# 查看服务器时间
date
# 启动ntpd daemon，持续校准时间
systemctl start ntpd
```

# docker in centos7

## [docker-mongo](https://www.jianshu.com/p/2181b2e27021)

### 常用命令

```
# 权限登录
docker exec -it mongo mongo admin -u linj -p
# 添加用户
db.createUser({ user: 'test', pwd: '123456', roles: [{ role: "readWrite", db: "test" }] });

```

### 备份恢复

```
一.备份数据库：
方法一：进入mongodb容器：
docker exec -it 容器名 /bin/sh

执行备份指令：
mongodump -h ip  -d 数据库名 -o  容器存放备份数据的地址
注意：若容器内的存备份数据的地址没有被映射出来，则exit推出容器回到宿主机,
          执行：
          docker cp 容器名:容器内存备份数据的地址  宿主机的存放备份数据的地址
方法二：直接在宿主机执行导出操作：

            将备份指令写入sh文件，建立宿主机和docker容器之间的联系

          docker run --link 容器名:mongodb -v 容器存放备份数据的地址:宿主机存放导出文件的地址 mongo 宿主机存放sh文件的地址
          例如：
         docker run --link zks-mongo:mongodb -v /zks/db_backup:/zks/db_backup mongo /zks/db_backup/backupright.sh

二、导入数据库

  将数据到入docker中mongodb,且mongodb已经存在这个数据库表

  先删掉原来的的数据库表，否则，新导入进去的数据如果有一些和原来的数据重复就不能导入成功
  删掉数据库表的步骤：
  1.进入mongodb容器
  2.执行mongo
  3.查看有哪些数据库 show dbs
  4.进入某个数据库 use 数据库名
  5.查看数据库中有哪些表 show collections
  6.删除数据库中的某个表 db.数据库表名.drop()

  将要导入的数据库表放在容器映射到宿主机的路径下
  执行：
  mongorestore -h mongodb容器的ip -d 要导入的数据库的表名 要导入的数据库表存放的路径
---------------------
作者：crush1988
来源：CSDN
原文：https://blog.csdn.net/crush1988/article/details/81019302
版权声明：本文为博主原创文章，转载请附上博文链接！
```

### 默认数据地址:

```
/var/lib/docker/volumes
```

## [yapi](https://www.jianshu.com/p/a97d2efb23c5)

```
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

## [jenkins](https://github.com/jenkinsci/docker/blob/master/README.md)

```
docker run --name jenkins -d -e JAVA_OPTS="-Duser.timezone=Asia/Shanghai" -v jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime -p 3002:8080 -p 50000:50000 jenkins/jenkins
```

## [gitlab](https://www.jianshu.com/p/24959481340e)

```
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

## [gitlab-runner](https://segmentfault.com/a/1190000011553991)

```
sudo docker run -d --name gitlab-runner --add-host=lj.io:127.0.0.1 --restart always   -v /root/lj/gitlab-runner/config:/etc/gitlab-runner   -v /var/run/docker.sock:/var/run/docker.sock   gitlab/gitlab-runner
```

## [mysql](http://www.runoob.com/docker/docker-install-mysql.html)

```
docker pull mysql
sudo docker run -p 3306:3306 --name mysql -v /opt/docker_v/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```

## 容器开机启动

```
# 没有使用到 --link的容器使用
docker update --restart=always xxx
# 取消启动
docker update --restart=no xxx
```

## 导出容器信息

```
docker inspect name/id
```

## 修改容器 host

```
# 创建容器时添加
--add-host= lj.io:127.0.0.1
```

## 修改容器时区

```
-v /etc/localtime:/etc/localtime
```

## 进入容器 shell

```
docker exec -it [name] /bin/bash
```

## zip 相关

```
# 压缩
zip –q –r a.zip /home/wwwroot/a
# 解压缩 到当前目录
unzip a.zip
# 解压缩带参
unzip a.zip -q -d /home/a
```

### 查看 centos 版本

`cat /etc/redhat-release`

# nginx

```
sudo yum install nginx
sudo systemctl start nginx
```

# MYSQL

```
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

# PHP

```
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

```
# 配置最后加上：
fastcgi_param  PHP_ADMIN_VALUE  "open_basedir=/home/php项目根目录/:/tmp/:/proc/";
```

# 安装 redis

```
yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
yum --enablerepo=remi install redis
# 开机启动
systemctl enable redis.service
```
