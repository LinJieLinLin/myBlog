---
title: centos6.5
date: 2016-07-07 07:07:11
tags: 
- 配置
---
{% cq %} centos6.5 {% endcq %}
<!--more-->
# 软件
## vsftpd
```
yum install vsftpd
```
### 虚拟用户
```
yum -y install db4 db4-utils
#创建用户列表，注意奇行是用户名，偶行是密码
vim /etc/vsftpd/virtual_user.txt

#添加用户
test
123456

# 生成虚拟用户认证的db文件
db_load -T -t hash -f /etc/vsftpd/virtual_user.txt /etc/vsftpd/virtual_user.db
# 编辑认证文件
vim /etc/pam.d/vsftpd
# 保留第一行注释其他，在最后增加以下两句
# 32位系统
auth required /lib/security/pam_userdb.so db=/etc/vsftpd/virtual_user
account required /lib/security/pam_userdb.so db=/etc/vsftpd/virtual_user
# 64位系统
auth required /lib64/security/pam_userdb.so db=/etc/vsftpd/virtual_user
account required /lib64/security/pam_userdb.so db=/etc/vsftpd/virtual_user
#生成配置文件
mkdir -p /etc/vsftpd/virtual_conf

#添加账户，文件名等于virtual_user.txt里面的账户名，否则下面设置无效
vim /etc/vsftpd/virtual_conf/test

# 每个虚拟用户的单独配置，会覆盖模板配置文件配置
local_root=/www/wwwroot
anon_umask=022
write_enable=YES
anon_world_readable_only=NO
anon_upload_enable=YES
anon_mkdir_write_enable=YES
anon_other_write_enable=YES
```
### 防火墙
```
# vim /etc/sysconfig/iptables
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 21 -j ACCEPT
iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 50000:50020 -j ACCEPT
service iptables save
service iptables restart
```
### 配置SELinux
```
# 关掉
setenforce 0
# 或使用这个
setsebool -P allow_ftpd_full_access 1
```
### vsftpd.conf
```
# Example config file /etc/vsftpd/vsftpd.conf
#
# 如果vsftpd处于独立模式，则这是它将侦听传入FTP连接的端口。
listen_port=21
#
# 登入目录
local_root=/root/home/ftp
#
# 是否允许匿名用户登录
anonymous_enable=NO
#
# 设定本地用户可以访问。注：如使用虚拟宿主用户，在该项目设定为NO的情况下所有虚拟用户将无法访问
local_enable=YES
#
# 设定允许进行写操作(上传、删除)，默认为YES
write_enable=YES
#
# 使用本地时间，如果不设置的话默认时间是GMT格林时间，会慢8个小时
use_localtime=YES
#
# 此参数在VSFTPD使用单独(standalone)模式下有效。此参数定义了FTP服务器最大的并发连接数，当超过此连接数时，服务器拒绝客户端连接。默认值：0（无限制）。
max_clients=5
#
# 此参数在VSFTPD使用单独(standalone)模式下有效。此参数定义每个IP地址最大的并发连接数目。超过这个数目将会拒绝连接。此选项的设置将影响到象网际快车这类的多进程下载软件。默认值为0，表示不限制。
max_per_ip=3
#
# 掩饰码
local_umask=022
#
# 是否允许匿名FTP用户上传文件。
#anon_upload_enable=YES
#
# 是否允许匿名FTP用户能够创建新目录
#anon_mkdir_write_enable=YES
#
# 激活目录消息 - 当远程用户进入某个目录时发送的消息。
dirmessage_enable=YES
#
# 设置为yes时，用户上传和下载文件都会被记录下来，记录文件位置与xferlog_file=/var/log/vsftpd/xferlog
xferlog_enable=YES
#
# 在vsftpd_log_file和xferlog_file文件之间切换登录文件信息，NO 写入 vsftpd_log_file, YES 写入 xferlog_file
xferlog_std_format=YES
#
# 设置另外一个vsftpd的日记文件，也可以不设置
dual_log_enable=YES
xferlog_file=/var/log/vsftpd/xferlog
#
# 设置日志目录
vsftpd_log_file=/var/log/vsftpd/vsftpd.log
#
# 端口样式连接始发的端口（只要名称不正确的 connect_from_port_20 启用），默认值：20
#connect_from_port_20=YES
#
# 是否修改匿名用户所上传文件的所有权。YES，匿名用户所上传的文件的所有权将改为另外一个不同的用户所有，用户由chown_username参数指定。此选项默认值为NO。 
#chown_uploads=YES
#
# 指定拥有匿名用户上传文件所有权的用户
#chown_username=whoever
#
# 远程客户端建立与PASV样式数据连接的连接的超时（以秒为单位）,默认值：60。
#accept_timeout=60
#
# 远程客户端响应我们的端口样式数据连接的超时时间（秒）。默认值：60。
#connect_timeout=60
#
# 远程客户端可能在FTP命令之间花费的最长时间（以秒为单位）。如果超时触发，远程客户端将被启动。默认值：300
#idle_session_timeout=300
#
# 超时时间（以秒为单位），大概是允许数据传输停止而无进度的最大时间。如果超时触发，远程客户端将被启动。默认值：300
#data_connection_timeout=300
#
# 本地认证用户允许的最大数据传输速率（以字节为单位）。默认值：0（无限制）
#local_max_rate=0
#
# 建议您在系统上定义一个唯一的用户，ftp服务器可以用作完全独立且无特权的用户。
#nopriv_user=ftpsecure
#
# 是否启动异步传输功能
#async_abor_enable=YES
#
# 是否启用ASCII功能
ascii_upload_enable=YES
ascii_download_enable=YES
#
# 自定义登录显示的字符串
#ftpd_banner=Welcome to blah FTP service.
#
# 指定某个纯文本作为用户登录时显示的欢迎字眼，也可以放置一些让用户知道本FTP服务器的目录架构
#banner_file=/etc/vsftpd/welcome.txt
#
# 您可以指定一个不允许的匿名电子邮件地址的文件。 显然有助于打击某些DoS攻击。
#deny_email_enable=YES
# (default follows)
#banned_email_file=/etc/vsftpd/banned_emails
#
# 锁定某些用户在自家目录中。即当这些用户登录后，不可以转到系统的其他目录，只能在自家目录(及其子目录)下。
#chroot_local_user=YES
chroot_list_enable=YES
# (default follows)
#chroot_list_file=/etc/vsftpd/chroot_list
#
# 此选项默认值为NO , 此时ftpusers 文件中的用户禁止登录FTP 服务器；若此项设为YES ，则 user_list 文件中的用户允许登录 FTP 服务器，而如果同时设置了 userlist_deny=YES ，则 user_list 文件中的用户将不允许登录FTP 服务器，甚至连输入密码提示信息都没有，直接被FTP服务器拒绝
#userlist_enable=YES
#
# 此项默认为YES ，设置是否阻扯user_list 文件中的用户登录FTP 服务器,设置为NO时只允许user_list 当中的用户使用ftp,对于后新建的用户起到屏蔽作用，如果想要使用ftp则必须加入这个列表文件中
#userlist_deny=NO
#
# 当启用“listen”指令时，vsftpd以独立模式运行，并在IPv4套接字上侦听。 该指令不能与listen_ipv6指令一起使用。
listen=YES
#
# 此指令允许侦听IPv6套接字。 要监听IPv4和IPv6套接字，您必须运行两个vsftpd副本和两个配置文件。请确保其中一个listen选项被注释！
#listen_ipv6=YES
#
# 设置 PAM 外挂模块提供的认证服务所使用的配置文件名 ，即/etc/pam.d/vsftpd 文件
pam_service_name=vsftpd.db
#
# 是否开启用虚拟用户功能
guest_enable=YES
#
# 指定虚拟用户的宿主用户，CentOS中已经有内置的ftp用户了
guest_username=root
#
# 匿名客户端允许的最大数据传输速率（以字节为单位）。默认值：0（无限制）
#anon_max_rate=0
#
# 为匿名用户设置文件创建的umask的值。注意！如果要指定八进制值，请记住“0”前缀，否则该值将被视为基数10整数！默认值：077
#anon_umask=022
#
# 设定虚拟用户个人vsftp的CentOS FTP服务文件存放路径。存放虚拟用户个性的CentOS FTP服务文件(配置文件名=虚拟用户名)
user_config_dir=/etc/vsftpd/virtual_conf
#
# 如果要禁止PASV方法获取数据连接，请设置为NO。
pasv_enable=YES
#
# 设定在PASV模式下，建立数据传输所可以使用port范围的下界和上界，0 表示任意。默认值为0。把端口范围设在比较高的一段范围内
pasv_min_port=50000
pasv_max_port=50020
#
# 默认值为NO。为YES时，将关闭PASV模式的安全检查。
pasv_promiscuous=YES
#
# 如果您不想使用PORT方法获取数据连接，则设置为NO。
#port_enable=YES
#
# 默认值为NO。如果要禁用PORT安全检查，确保传出数据连接只能连接到客户端，请设置为YES。
#port_promiscuous=YES
#
# 表明服务器使用 tcp_wrappers 作为主机访问控制方式，tcp_wrappers 可以实现linux 系统中网络服务的基于主机地址的访问控制，在/etc 目录中的hosts.allow 和hosts.deny 两个文件用于设置tcp_wrappers 的访问控制，前者设置允许访问记录，后者设置拒绝访问记录。例如想限制某些主机对FTP 服务器12.36.126.141 的匿名访问，编缉/etc/hosts.allow 文件，如在下面增加两行命令：vsftpd:192.168.2.1:DENY 和vsftpd:192.168.2.20:DENY 表明限制IP 为192.168.2.1/192.168.2.20 主机访问IP 为12.36.126.141 的FTP 服务器，此时FTP 服务器虽可以PING 通，但无法连接
tcp_wrappers=YES
```
### 重启vsftpd服务
```
#启动vsftpd 服务
service vsftpd start

#重启vsftpd 服务
service vsftpd restart
```
### 开机启动
```
chkconfig vsftpd on
chkconfig vsftpd --list | grep vsftpd
```
### 连不上处理
```
连接被拒绝
有两个原因，vsftpd进程没有启动，或者服务器防火墙的端口没有打开。
可以用
telnet 服务器IP地址 21
这个命令来测试。

500 OOPS: priv_sock_get_cmd
增加这个配置应该就可以解决：
seccomp_sandbox=NO

错误: GnuTLS 错误 -15: An unexpected TLS packet was received.
增加这个配置可以解决：
allow_writeable_chroot=YES

响应: 425 Security: Bad IP connecting.
这个一般是因为pasv端口没有设置，或者防火墙上对应的端口没有打开。
防火墙上打开40000~40100端口，然后设置
pasv_min_port=40000
pasv_max_port=40100
pasv_promiscuous=YES
就可以解决了。
```
### [参考自](https://www.jianshu.com/p/ea32af794680)
```
作者：马儿爱吃草
链接：https://www.jianshu.com/p/ea32af794680
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```


