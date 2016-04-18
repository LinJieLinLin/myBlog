---
title: SCSS_MIXIN
date: 2016-04-18 22:57:05
tags: 
- SCSS
---
{% cq %} scss mixin 相关收集 {% endcq %}
<!--more-->
# 清除浮动
```
%c-f {
  /*
  &:after {
    content: "";
    display: table;
    font: 0/0 a;
  }
  */
  &:after {
    clear: both;
  }
}
```
