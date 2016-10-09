---
title: JS
date: 2016-10-01 00:03:54
tags: 
- JS
---
{% cq %} 与JS相关的函数 {% endcq %}
<!--more-->
# 时间相关
# 正则相关
# 位置相关
## 获取元素相对于这个页面的X标
```
/**
 * [获取元素相对于这个页面的X坐标]
 * @param  {[type]} elem [description]
 * @return {[type]}      [description]
 */
lin.pageX = function(argE) {
    return argE.getBoundingClientRect().left + (document.documentElement.scrollLeft || document.body.scrollLeft);
};
/**
 * [获取元素相对于这个页面的Y坐标]
 * @param  {[type]} argE [description]
 * @return {[type]}      [description]
 */
lin.pageY = function(argE) {
    return argE.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop);
};
```



