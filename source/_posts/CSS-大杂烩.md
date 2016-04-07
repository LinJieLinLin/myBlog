---
title: CSS
date: 2016-04-02 00:03:54
tags: 
- CSS
---
{% cq %} 与CSS相关的一些学习记录 {% endcq %}
<!--more-->
# 将元素垂直居中
1. CSS3 transform:
```
.c{
top:50%;transform: translate(0 , -50%);
}
```
2. 把容器当作表格单元:
```
.parent{display:table;};.child{display:table-cell;vertical-align:middle;}
```
3. 这个方法使用了一个 position:absolute，有固定宽度和高度的 div。这个 div 被设置为 top:0; bottom:0;。但是因为它有固定高度，其实并不能和上下都间距为 0，因此 margin:auto; 会使它居中。使用 margin:auto;使块级元素垂直居中是很简单的。
```
#content {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    height:240px;
    width:70%;
}
```
# Display: 属性
+ none：隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间
+ inline：指定对象为内联元素。
+ block：指定对象为块元素。
+ list-item：指定对象为列表项目。
+ inline-block：指定对象为内联块元素。（CSS2）
+ table：指定对象作为块元素级的表格。类同于html标签`<table>`（CSS2）
+ inline-table：指定对象作为内联元素级的表格。类同于html标签`<table>`（CSS2）
+ table-caption：指定对象作为表格标题。类同于html标签`<caption>`（CSS2）
+ table-cell：指定对象作为表格单元格。类同于html标签`<td>`（CSS2）
+ table-row：指定对象作为表格行。类同于html标签`<tr>`（CSS2）
+ table-row-group：指定对象作为表格行组。类同于html标签`<tbody>`（CSS2）
+ table-column：指定对象作为表格列。类同于html标签`<col>`（CSS2）
+ table-column-group：指定对象作为表格列组显示。类同于html标签`<colgroup>`（CSS2）
+ table-header-group：指定对象作为表格标题组。类同于html标签`<thead>`（CSS2）
+ table-footer-group：指定对象作为表格脚注组。类同于html标签`<tfoot>`（CSS2）
+ run-in：根据上下文决定对象是内联对象还是块级对象。（CSS3）
+ box：将对象作为弹性伸缩盒显示。（伸缩盒最老版本）（CSS3）
+ inline-box：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）（CSS3）
+ flexbox：将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3）
+ inline-flexbox：将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3）
+ flex：将对象作为弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
+ inline-flex：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
# HTML标签
+ 布局类：header, footer, container, main, content, aside, page, section
+ 包裹类：wrap, inner
+ 区块类：region, block, box
+ 结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
+ 列表类：list, item, field
+ 主次类：primary, secondary, sub, minor
+ 大小类：s, m, l, xl, large, small
+ 状态类：active, current, checked, hover, fail, success, warn, error, on, off
+ 导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
+ 交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,
+ 星级类：rate, star
+ 分割类：group, seperate, divider
+ 等分类：full, half, third, quarter
+ 表格类：table, tr, td, cell, row
+ 图片类：img, thumbnail, original, album, gallery
+ 语言类：cn, en
+ 论坛类：forum, bbs, topic, post
+ 方向类：up, down, left, right
+ 其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading