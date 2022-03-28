---
title: codeFormat
date: 2021-08-02 00:03:54
tags:
  - 配置
  - eslint
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

``` js
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

``` json
// rules
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

# stylelint 格式化

## 安装

``` shell
npm i -d stylelint stylelint-config-recommended-scss stylelint-config-prettier
# 添加scripts
npm set-script stylelint "stylelint \"src/**/*.scss\""
```

``` json
// .stylelintrc.json
{
  "extends": ["stylelint-config-recommended-scss","stylelint-config-prettier"]
}
```

``` js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  rules: {
    indentation: 2,
    'scss/operator-no-unspaced': null,
    'no-duplicate-selectors': null,
    'selector-type-no-unknown': null,
  },
  overrides: [
    {
      files: ['src/**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}

```

# prettier 格式化

``` shell
# 不使用prettier格式化代码,常用于css PX 处理
/* prettier-ignore */
# 全局安装
npm i prettier -g
# 局部安装
npm i prettier -D
# package.json script
"prettier --write 'src/**/*.{js,jsx,tsx,ts,vue,less,md,json}'",
# eslint 增加prettier解决冲突
npm i eslint-config-prettier -D
```

``` js
// .eslintrc
module.exports = {
  extends:[
    'prettier'
  ],
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
