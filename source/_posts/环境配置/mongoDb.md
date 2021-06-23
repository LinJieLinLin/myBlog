---
title: mongodb
date: 2016-04-02 00:03:54
tags:
  - DB
  - 配置
---

{% blockquote %} mongodb 相关 {% endblockquote %}

<!--more-->

# 常用命令

## 创建管理员

```
db.createUser(
   {
     user: "admin",
     pwd: "123456",
     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
   }
)

```

##创建普通用户

```
db.createUser(
   {
     user: "test",
     pwd: "123456",
     roles: [ { role: "readWrite", db: "test" } ]
   }
)
```

## 开启权限验证

```
# win 添加到/mongod.conf里
auth = true
# ubuntu添加到/etc/mongod.conf里
security:
  authorization: enabled
```

## 登录

```
# mongo 数据库名 -u 用户名 -p 密码
mongo admin -u root -p 123456
```

## 备份数据库

```
# mongodump -h ip+端口 -d 数据库名 -u 用户名 -p 密码 -o 备件目录
mongodump -h 127.0.0.1:27017 -d nodebb -u linj -p 123456 -o /home/linj/backup
```

## 还原数据库

```
# mongorestore -h 127.0.0.1:27017 -d nodebb -u linj -p 123456 恢复位置/nodebb --drop(删除其它数据后导入)
mongorestore -h 127.0.0.1:27017 -d nodebb -u linj -p 123456 /home/linj/backup/nodebb
```

# win 下安装:下载 64 位版本，一路 NEXT

## 命令行运行(bin 目录下)

```
mongdb
或
mongodb --dbpath (数据库存放文件夹)
```

## 配置服务如下（服务名为 myMongodb）

```
mongod.exe --logpath "D:\KFenv\mongoDB3.2\mongodb.log(log文件，指定路径即可)" --logappend --dbpath "D:\KFenv\mongoDB3.2\db（数据库存放文件夹，运行前要先创建该文件夹）" --port 27017 --serviceName "myMongodb" --serviceDisplayName "myMongodb" --install
```

## 添加已存在的用户

```
db.addUser("userName","Pwd")
//设置用户为允许连接的用户
db.auth("userName","Pwd")
//创建表
db.createCollection("TableName")
```

# [ubnutu 64 mongodb install](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-ubuntu/)

```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
# 要翻墙
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
MongoDB 默认的数据目录是 /data/db/ ，就直接使用默认的。
#创建数据存储目录
$ sudo mkdir -p /data/db
#赋予目录权限
$ sudo chmod 755 /data/*
```

## 配置 MongoDB

### 指定配置启动

首先要创建配置文件，默认的配置文件路径是：/etc/mongod.conf。
一个简单的配置文件如下：

```
verbose = true
# 数据存放目录
dbpath = /data/db
# 日志目录
logpath = /var/log/mongodb/mongodb.log
logappend = true
port = 27017
```

### 指定配置文件的命令如下：

```
$ mongod -f /etc/mongod.conf
```

### 控制脚本在：/etc/init.d/mongod

```
安装开机服务
sudo update-rc.d mongod defaults 95
```

> 如果想要切换用户运行 MongoDB 的话，需要设置 /var/lib/mongodb 、 /var/log/mongodb 两个目录的权限

## 启动

```
#启动服务端
$ mongod
#启动客户端
$ mongo
```

## 服务启动、停止、重启

```
$ sudo service mongodb start
$ sudo service mongodb stop
$ sudo service mongodb restart
```

## 开机启动

```
sudo systemctl enable mongod
```
