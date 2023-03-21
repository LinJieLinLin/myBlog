---
title: linux shell
date: 2018-07-07 07:07:11
tags:
  - 配置
---

{% blockquote %} linux shell {% endblockquote %}

<!--more-->

## 运行

```shell
#使脚本具有执行权限
chmod +x ./test.sh
#执行脚本
./test.sh
```

## 变量

### 定义变量

```shell
# 设置只读
hi="hello world!"
readonly hi
hi="read only"
echo ${hi}
#hello world!
# 删除
del="del me!"
unset ${del}
# for循环
for key in a b c d e
do
    echo "now key is ${key}"
done
```

### 特殊变量

```shell
$0  当前脚本的文件名
$n  传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是$1，第二个参数是$2。
$#  传递给脚本或函数的参数个数。
$*  传递给脚本或函数的所有参数。
$@  传递给脚本或函数的所有参数。被双引号(" ")包含时，与 $* 稍有不同，下面将会讲到。$* 和 $@ 的区别
    $* 和 $@ 都表示传递给函数或脚本的所有参数，不被双引号(" ")包含时，都以"$1"   "$2" … "$n" 的形式输出所有参数。
    但是当它们被双引号(" ")包含时，"$*" 会将所有的参数作为一个整体，以"$1 $2 …  $n"的形式输出所有参数；"$@" 会将各个参数分开，以"$1" "$2" … "$n"     的形式输出所有参数。

$?  上个命令的退出状态，或函数的返回值。
$$  当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID。
eg:
vim t.sh
echo "文件名: ${0}"
echo "第一个参数 : ${1}"
echo "第二个参数 : ${2}"
echo "参数: $@"
echo "参数: $*"
echo "参数个数 : ${#}"
ESC :wq
```

### 转义

```shell
# 有 -e 表示对转义字符进行替换。如果不使用 -e 选项，将会原样输出
echo -e '***'
\\  反斜杠
\a  警报，响铃
\b  退格（删除键）
\f  换页(FF)，将当前位置移到下页开头
\n  换行
\r  回车
\t  水平制表符（tab键）
\v  垂直制表符
```

### 自带命令替换

```shell
# 不是单引号
DATE=`date`
echo "当前时间是： ${DATE}"
```

### 变量替换

```shell
${var}  变量本来的值
${var:-word}    如果变量 var 为空或已被删除(unset)，那么返回 word，但不改变 var 的值。
${var:=word}    如果变量 var 为空或已被删除(unset)，那么返回 word，并将 var 的值设置为 word。
${var:?message} 如果变量 var 为空或已被删除(unset)，那么将消息 message 送到标准错误输出，可以用来检测变量 var 是否可以被正常赋值。
若此替换出现在Shell脚本中，那么脚本将停止运行。
${var:+word}    如果变量 var 被定义，那么返回 word，但不改变 var 的值。
```

## 常用命令

### 查看端口占用

```shell
netstat -anp|grep 80
```

### 更改文件/文件夹所有者

```shell
sudo chown -R root:root dirname/filename
# -R 为递归操作
sudo chown -R username dirname/filename
# -R 为递归操作
sudo chgrp -R groupname dirname
```

### 建立软连接

```shell
ln -s 源目录 目标目录（绝对路径）
```

### 修改密码

```shell
passwd usrname
```

### 新建用户

```shell
adduser linj
# 输入密码，然后一路回车，按y
# 添加root权限
vim /etc/sudoers
```

### 查看用户/用户组

```shell
cat /etc/passwd #查看用户
cat /etc/group #查看用户组
```

### 显示磁盘空间

```shell
df -hl
# 查看当前目录文件大小，max-depth为目录层数
du -h --max-depth=1
```

### 同步时间

```shell
# apt-get install ntpdate
#  yum install ntp
ntpdate cn.pool.ntp.org
```

## SSL

### 根 CA 证书+域名证书

```sh
# 创建根密钥
openssl ecparam -out root.key -name prime256v1 -genkey
# 生成证书签名请求 (CSR)
openssl req -new -sha256 -key root.key -out root.csr
# 根证书
openssl x509 -req -sha256 -days 3650 -in root.csr -signkey root.key -out root.crt
# 服务器证书
# 服务器证书的 CN（公用名）必须与颁发者的域不同。 例如，在本例中，颁发者的 CN 是 root.com，服务器证书的 CN 是 lj.io
openssl ecparam -out domain.key -name prime256v1 -genkey
openssl req -new -sha256 -key domain.key -out domain.csr
openssl x509 -req -in domain.csr -CA  root.crt -CAkey root.key -CAcreateserial -out domain.crt -days 3650 -sha256
# 验证
openssl x509 -in domain.crt -text -noout
## 转换
# PEM(crt) to DER
openssl x509 \
       -in domain.crt \
       -outform der -out domain.der
# DER to PEM(crt)
openssl x509 \
       -inform der -in domain.der \
       -out domainDer.crt

# OpenSSL 验证配置(浏览器访问)
openssl s_client -connect localhost:443 -servername lj.io -showcerts
```

### 自签名证书

```sh
openssl genrsa -out domain.key 4096
openssl req -new -key domain.key -out domain.csr
openssl x509 -req -days 3650 -in domain.csr -signkey domain.key -out domain.crt
```
