---
title: docker
date: 2022-03-20
tags:
  - 配置
  - docker
  - 构建
---

{% blockquote %} docker {% endblockquote %}

<!--more-->

## 常用命令
  
```shell
# 安装 docker
curl -fsSL get.docker.com -o get-docker.sh
sh get-docker.sh

```

### docker-compose

```sh
# 安装 docker-compose 根据docker-compose.yml
docker-compose up -d
```

### 构建容器

```shell
# 根据DockerFile将当前目录构建镜像
docker build -t 容器名称:v1.0 .
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
