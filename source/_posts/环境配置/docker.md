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

### 容器配置

#### filebrowser 文件管理

```json
{
  "port": 80,
  "baseURL": "",
  "address": "0.0.0.0",
  "log": "stdout",
  "database": "/database/filebrowser.db",
  "root": "/srv"
}
```

```shell
docker pull filebrowser/filebrowser
docker run  --name filebrowser   -v  /mnt/shared:/srv     -v /root/app/filebrowser/filebrowser.db:/database.db     -v /root/app/filebrowser/.filebrowser.json:/.filebrowser.json     -u $(id -u):$(id -g)     -p 9001:80     filebrowser/filebrowser
```

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
