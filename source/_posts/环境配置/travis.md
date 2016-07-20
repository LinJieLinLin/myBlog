---
title: 使用 Travis CI 自动更新 GitHub Pages
<!-- date: 2011-11-11 11:11:11 -->
tags: 
- 配置
---
{% cq %} 使用 Travis CI 自动更新 GitHub Pages {% endcq %}
<!--more-->
## 生成一个 Github Personal Access Token
#### 前往 Github 帐号 Settings 页面，在左侧选择 Personal Access Token，然后在右侧面板点击 “Generate new token” 来新建一个 Token。需要注意的是，创建完的 Token 只有第一次可见，之后再访问就无法看见（只能看见他的名称），因此要保存好这个值。
## 使用 Travis CI 的 命令行工具 加密 GitHub 的 Personal Access Token
#### 这个工具是一个 gem 包，因此需要 Ruby 环境。假设已经安装好 Ruby 环境，即可安装 Travis CI 的命令行工具，以及加密：
```
# 安装 Travis CI 命令行工具
gem install travis

# 加密 Personal Access Token
travis encrypt -r iissnan/theme-next-docs GH_Token=XXX
```
#### 第二条命令中 -r 后的参数是 GitHub 仓库的名字（<用户名>/<仓库名>）；GH_TOKEN 将作为环境变量使用。将这条命令输出的结果复制到 .travis.yml 文件下：
## 让 Travis CI 往 Github 仓库的 gh-pages 分支提交
#### 根据需求的不同，这里的配置也不尽相同，但重要的是如何使用 GH_REF 和 GH_TOKEN 这两个环境变量。NexT 文档是执行 gulp dist 来生成最终的 HTML文件，然后推送到 GitHub Pages，其配置如下：
```
language: node_js
node_js: stable
# Travis-CI Caching
cache:
  directories:
    - node_modules
# S: Build Lifecycle
install:
  - npm install
script:
  - hexo clean
  - hexo g

after_script:
  - cd public
  - git init
  - git config user.name "LinJieLinLin"
  - git config user.email "993353454@qq.com"
  - git add .
  - git commit -m "Update Blog"
  - git push --force --quiet "https://${GH_TOKEN}@${GH_URL}" master:gh-pages
# E: Build LifeCycle

branches:
  only:
    - master
env:
 global:
  - secure: "gtTjsLor7/6tnMpuM0e4g8Om7A8KvZSd9uX1c9Ey4CyCpILEWpDyP/pEBM4e4gmt6ADierzWiDNlK76Vkprioql+RxVrRohu3VpEwDHWfNiRNY662ysLPqS8DVbWwJLsrPegdgyXd9WWkMaf49kwMRSWSpKh8dA0T6ngQqGaXKmJnlf6SQOZCZwucf33P+K2RqklAytnBDrVFUyKGmsk/qRbDu4mSVPlfIfBZktdPFm4tbyStTFw8PKixUD9b33SSbR4SeH5zYRCXzDIldTPL+fW2+yTWEM+g+WqTMZgRH/jJBsfGhjtjTW1Kb/c7hphpF/GoRl444Tm68LoGx7sTEhs7tCOAftEYShci5cMhRxxnuLiDJnzFUT9v4QIfaHyIHpTB+WTWCcFeaTmRcggoDaQbegkUReaUosw5V36YopdEVSMG0VL0V6WkQRaRfP6NrDBK6G5HjOTzc6qXUuxTfB6vYeT9sef0E3zEIHnVQBRl+uyeraRk5hBMeVCmjs1SoSFysdwzNhHCagM7PHWQSsWfwGZCa2X1e569SXxONF7WBF0C3iqCYHsWNa1LBC0YoESgMUp56yf/FiYauMoBa7isDs61jVBF2/bfOdfgRDrccjoLdHwuulb/3fRLs3PnqorAG0/Hmr/PazFwyw2IDlp7Psm9FbtumFaUJzg6OU="

```


