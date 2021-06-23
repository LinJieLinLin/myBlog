---
title: linux shell
date: 2016-07-07 07:07:11
tags:
  - 配置
---

{% blockquote %} linux shell {% endblockquote %}

<!--more-->

# 运行

```
#使脚本具有执行权限
chmod +x ./test.sh
#执行脚本
./test.sh
```

# 变量

## 定义变量

```
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

## 特殊变量

```
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

## 转义

```
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

## 自带命令替换

```
# 不是单引号
DATE=`date`
echo "当前时间是： ${DATE}"
```

## 变量替换

```
${var}  变量本来的值
${var:-word}    如果变量 var 为空或已被删除(unset)，那么返回 word，但不改变 var 的值。
${var:=word}    如果变量 var 为空或已被删除(unset)，那么返回 word，并将 var 的值设置为 word。
${var:?message} 如果变量 var 为空或已被删除(unset)，那么将消息 message 送到标准错误输出，可以用来检测变量 var 是否可以被正常赋值。
若此替换出现在Shell脚本中，那么脚本将停止运行。
${var:+word}    如果变量 var 被定义，那么返回 word，但不改变 var 的值。
```

# 常用命令

### 查看端口占用

```
netstat -anp|grep 80
```

### wget

### 更改文件/文件夹所有者

```
sudo chown -R root:root 文件/文件夹
```

### 建立软连接

```
ln -s 源目录 目标目录（绝对路径）
```

### 修改密码

```
passwd usrname
```

### 新建用户

```
adduser linj
# 输入密码，然后一路回车，按y
# 添加root权限
vim /etc/sudoers
```

### 改变用户/组

```
# -R 为递归操作
chown -R username dirname/filename
# -R 为递归操作
chgrp -R groupname dirname
```

### 显示磁盘空间

```
df -hl
# 查看当前目录文件大小，max-depth为目录层数
du -h --max-depth=1
```

### 同步时间

```
# apt-get install ntpdate
#  yum install ntp
ntpdate cn.pool.ntp.org
```
