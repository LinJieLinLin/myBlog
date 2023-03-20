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
# 额外运行容器命令
docker-compose exec web yarn test
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

### 复制容器数据

```sh
# 容器到本机
docker cp  name:/www /tmp/
# 本机到容器
docker cp  /tmp/ name:/www
```

### 容器配置

#### nginx

```shell
docker run \
-p 80:80 \
--name nginx \
-v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /home/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /home/nginx/log:/var/log/nginx \
-v /home/nginx/html:/usr/share/nginx/html \
-d nginx:latest
```

#### alist

```sh
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest

# 查看密码
docker exec -it alist ./alist admin
```
