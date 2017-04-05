---
title: 移动端web
tags: 
- web
---
{% cq %} 移动端web相关 {% endcq %}
<!--more-->
# meta标签
1、width：设置布局视口的宽
2、init-scale：设置页面的初始缩放程度
3、minimum-scale：设置了页面最小缩放程度
4、maximum-scale：设置了页面最大缩放程度
5、user-scalable：是否允许用户对页面进行缩放操作
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```
# [媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)
```
@media all and (min-width: 321px) and (max-width: 400px){
    html{
        background: red;
    }
}
```



