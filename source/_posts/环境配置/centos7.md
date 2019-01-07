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
docker run --name jenkins -d -v jenkins_home:/var/jenkins_home -p 3002:8080 -p 50000:50000 jenkins
```

## [gitlab](https://www.jianshu.com/p/24959481340e)

```
sudo docker run --detach \
    --hostname gitlab.gdtn.io \
    --publish 443:443 --publish 3003:80 --publish 23:22 \
    --name gitlab \
    --restart always \
    --volume /gitlab/config:/etc/gitlab \
    --volume /gitlab/logs:/var/log/gitlab \
    --volume /gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce
```

## [gitlab-runner](https://segmentfault.com/a/1190000011553991)

```
sudo docker run -d --name gitlab-runner --add-host=lj.io:127.0.0.1 --restart always   -v /root/lj/gitlab-runner/config:/etc/gitlab-runner   -v /var/run/docker.sock:/var/run/docker.sock   gitlab/gitlab-runner
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

#
