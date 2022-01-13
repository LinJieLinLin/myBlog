---
title: codeFormat
date: 2021-08-02 00:03:54
tags:
  - 配置
---

{% blockquote %} 代码格式化相关 {% endblockquote %}
<!--more-->

# eslint 格式化

```
devDependencies
eslint
以下按需：
"eslint-plugin-html"
"eslint-plugin-import"
"eslint-plugin-node"
"eslint-plugin-promise"
"eslint-plugin-standard"
"eslint-plugin-vue"
react:
"eslint-plugin-eslint-comments"
"eslint-plugin-jest"
"eslint-plugin-jsx-a11y"
"eslint-plugin-react"
"eslint-plugin-react-hooks"
"eslint-plugin-unicorn"
"eslint-template-visitor" -->
```

```
<!-- scripts -->
"lint": "eslint src/**/*.{js,jsx,ts,tsx,vue} --fix",
```

## eslint 配置

```
<!-- 初始化 -->
eslint --init
 <!-- 关闭当前行 -->
// eslint-disable-line
关闭下一行
// eslint-disable-next-line
关闭当前文件
/* eslint-disable */
```

### package.json

```
"eslintConfig":
  {
    "env": {
      "browser": true,
      "node": true
    }
  }
```

### YAML

```
env:
    browser: true
```

### .eslintrc.js

```
module.exports = {
  <!-- 运行环境 -->
  "env": {
    "browser": true,
  },
  <!-- 插件 -->
  'plugins': [
		'vue'
	],
  <!-- 扩展配置文件 -->
  extends:[],
  <!-- 规则 -->
  'rules': {
  },
  <!-- 全局变量 -->
  globals:{
    window:true
  }
}
```

#### 为特定类型的文件指定处理器

```
 "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        },
        {
            "files": ["**/*.md/*.js"],
            "rules": {
                "strict": "off"
            }
        }
    ]
```

# prettier 格式化

```
不使用prettier格式化代码,常用于css PX 处理
/* prettier-ignore */
<!-- devDependencies prettier -->
<!-- scripts -->
"prettier --write 'src/**/*.{js,jsx,tsx,ts,vue,less,md,json}'",
```

# git 代码提交检查

```
<!-- package.json -->
<!-- devDependencies: husky lint-staged -->
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,vue,json,css,scss,md}": [
      "prettier --write",
      "git add"
    ],
    "src/**/*.{js,jsx,ts,tsx,vue}": [
      "eslint --fix",
      "git add"
    ]
  }
}
```
