---
title: centos7
date: 2016-07-07 07:07:11
tags:
  - 配置
---

{% cq %} centos6.5 {% endcq %}

<!--more-->

# docker in centos7

## [docker-mongo](https://www.jianshu.com/p/2181b2e27021)

### 常用命令

```
# 权限登录
docker exec -it mongo mongo admin -u linj -p
# 添加用户
db.createUser({ user: 'test', pwd: '123456', roles: [{ role: "readWrite", db: "test" }] });

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
```

## 修改容器 host

```
# 启动容器时添加
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
