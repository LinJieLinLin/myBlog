---
title: vsCode
date: 2021-08-02 00:03:54
tags:
  - 配置
  - vscode
---

{% blockquote %} vsCode 相关 {% endblockquote %}
<!--more-->

# .vscode

## launch.json,vue edgeDebug

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-msedge",
      "request": "launch",
      "name": "edge",
      "url": "http://localhost:8888",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

## launch.json,react edgeDebug

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "pwa-chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}"
    },
}
```

## setting.json 项目级配置

```
{
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 保存即格式化
  "editor.formatOnSave": true,
  // typescript版本使用项目依赖的版本
  "typescript.tsdk": "node_modules/typescript/lib"
  // eslint自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
}
```

## sftp.json ftp 配置

```
{
  "name": "名称",
  "protocol": "sftp|ftp",
  "port": 22,
  "username": "用户名",
  "host": "host",
  "password": "",
  "context": "dist/本地目录",
  "ignore": [".vscode", ".git", ".DS_Store", "node_modules"],
  "remotePath": "目标目录"
}

```
