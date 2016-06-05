---
title: mongodb
<!-- date: 2011-11-11 11:11:11 -->
tags: 
- DB
- 配置
---
{% cq %} mongodb相关 {% endcq %}
<!--more-->
#  win下安装:下载64位版本，一路NEXT
## 命令行运行(bin目录下)
```
mongdb
或
mongodb --dbpath (数据库存放文件夹)
```
## 配置服务如下（服务名为myMongodb）
```
mongod.exe --logpath "D:\KFenv\mongoDB3.2\mongodb.log(log文件，指定路径即可)" --logappend --dbpath "D:\KFenv\mongoDB3.2\db（数据库存放文件夹，运行前要先创建该文件夹）" --port 27017 --serviceName "myMongodb" --serviceDisplayName "myMongodb" --install
```
## 创建用户
```
db.addUser("userName","Pwd") 
//设置用户为允许连接的用户  
db.auth("userName","Pwd") 
//创建表    
db.createCollection("TableName")                                     
```
## 登录
```
mongo admin -u root -p 123456
```


