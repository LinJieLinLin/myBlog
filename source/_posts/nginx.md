---
title: nginx
date: 2019-01-01 00:03:54
tags:
  - nginx
---

{% blockquote %} nginx配置 {% endblockquote %}

<!--more-->
## web安全头, [X-Frame-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options),[X-Content-Type-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options),[Referrer-Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy)

```conf
# 默认访问https协议
add_header Strict-Transport-Security "max-age=31536000";
# 禁止iframe引用
add_header X-Frame-Options "DENY" always;
# 禁用了客户端的 MIME 类型嗅探行为
add_header X-Content-Type-Options "nosniff" always;
# 禁用/启用浏览器api
add_header Permissions-Policy "fullscreen=(self), geolocation=(self)";
# 对于同源的请求，会发送完整的URL作为引用地址，但是对于非同源请求仅发送文件的源。
add_header Referrer-Policy origin-when-cross-origin;
# csp 已经存在的一个网站，用了太多内联代码修复问题，而且想确保资源只从 https 加载，并且禁止插件：
add_header Content-Security-Policy "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'";
```

## 基本配置

```conf
server {
    // 端口号
    listen 80;
    server_name www.example.com;
    location / {
        root /var/www/html;
        index index.html index.htm;
    }
    location /api{
        expires 12h;
        if ($request_uri ~* "(html|php|jsp|cgi|asp|aspx)")
        {
             expires 0;
        }
        proxy_pass http://129.204.212.27;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;

        #持久化连接相关配置
        #proxy_connect_timeout 30s;
        #proxy_read_timeout 86400s;
        #proxy_send_timeout 30s;
        #proxy_http_version 1.1;
        #proxy_set_header Upgrade $http_upgrade;
        #proxy_set_header Connection "upgrade";

        proxy_cache cache_one;
        proxy_cache_key $host$uri$is_args$args;
        proxy_cache_valid 200 304 301 302 1m;


        proxy_set_header Accept-Encoding "";
        sub_filter "^/api" "/api";
        sub_filter_once off;

        add_header X-Cache $upstream_cache_status;
    }
}
```

## 常用命令

```bash
## 查看 Nginx 程序文件目录:/usr/sbin/nginx
ps  -ef | grep nginx

## 查看 nginx.conf 配置文件目录:/etc/nginx/nginx.conf
nginx -t                 
vim /etc/nginx/nginx.conf

## 配置文件目录：/etc/nginx

## 虚拟主机配置文件目录：/etc/nginx/sites-available/
## 虚拟主机文件夹目录：/var/www/，详情可在 /etc/nginx/sites-available/ 中配置
## 默认网页文件目录：/usr/share/nginx/html

## 测试配置文件，只检查配置文件是否存在语法错误
nginx -t -c <path-to-nginx.conf>
sudo nginx -t -c /etc/nginx/nginx.conf

## 启动 Nginx 服务
nginx 安装目录 -c <path-to-nginx.conf>
sudo /etc/init.d/nginx start

## 停止 Nginx 服务
sudo /usr/sbin/nginx -s stop 

## 重启 Nginx 
sudo /usr/sbin/nginx -s reload  # 0.8 版本之后的方法
kill -HUP pid     # 向 master 进程发送信号从容地重启 Nginx，即服务不中断

sudo service nginx start
sudo service nginx stop
sudo service nginx restart
```
