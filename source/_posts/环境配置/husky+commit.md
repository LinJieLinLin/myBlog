---
title: husky+commitlint
date: 2022-03-27
tags:
  - 配置
  - husky
  - commitlint
---

{% blockquote %} husky+commitlint {% endblockquote %}

<!--more-->

## [husky](https://typicode.github.io/husky)

``` shell
npm i husky --save-dev
npm set-script postinstall "npx husky install"
npx husky install
npm i lint-staged --save-dev
# pre-commit 在代码commit前运行，通过钩子函数，可以判断提交的代码是否符合规范，我们可以在这里做强制格式化
npx husky add .husky/pre-commit "npx lint-staged"
# 在pre-commit之后运行，会检查commit的内容，做commit规范
npm i commitlint --save-dev
npm i @commitlint/config-conventionl --save-dev
npx husky add .husky/commit-msg "npx --no-install commitlint --edit \"$1\"" 
# pre-push可以在代码push之前运行一些脚本，目前的实践就是在push行为之前做本地编包、测试
npx husky add .husky/pre-push "echo before push"
```

```js
// .lintstagedrc.js
module.exports = {
  'src/*.{js,jsx,ts,tsx}': ['npx prettier --write', 'npx eslint --fix'],
  'src/*.{css,less,scss}': ['npx prettier --write', 'npx stylelint --fix'],
  '*.{json,md}': ['npx prettier --write'],
}
// .commitlintrc.js
module.exports = {extends: ["@commitlint/config-conventional"]};
```
