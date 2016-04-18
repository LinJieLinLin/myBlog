---
title: GIT
date: 2016-04-03 00:03:54
tags: 
- GIT
---
{% cq %} 与GIT相关的一些学习记录 {% endcq %}
<!--more-->
# 忽略变更
```git update-index --assume-unchanged fileName
git update-index --no-assume-unchanged fileName
```

# 记住http方式克隆仓库的密码
## 命令行
```git config credential.helper store
```
## 配置文件加上(.git/config)：
```[credential]
    helper = store
```

# cherry-pick把另一个本地分支的commit修改应用到当前分支。  (还是[tortoisegit](https://tortoisegit.org/)比较方便 )
```git cherry-pick <commit id>
```
