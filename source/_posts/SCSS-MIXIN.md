---
title: SCSS_MIXIN
date: 2016-04-18 22:57:05
tags: 
- SCSS
---
{% cq %} scss mixin 相关收集 {% endcq %}
<!--more-->
#  设置12到40px 的字体大小相隔2px eg:fs-12
```
/**
 * [oFsSet 设置12到40px 的字体大小相隔2pxeg:fs-12]
 * @param  {[type]} $l:14    [长度]
 * @param  {[type]} $mul:2   [间隔]
 * @param  {[type]} $unit:px [单位]
 * @param  {[type]} $d:12    [最小字体大小]
 * @return {[type]}          [description]
 */

@mixin oFsSet($l:14, $mul:2, $unit:px, $d:12) {
    @for $fs from 0 through $l {
        .fs-#{$d+$fs*$mul} {
            font-size: $d+$fs*$mul+$unit;
        }
    }
}
```
# 默认设置10到40的各个padding margin
```
/**
 * [oPdMgSet 默认设置10到40的各个ppadding margin]
 * @param  {[type]} $max:4   [基数]
 * @param  {[type]} $mul:10  [倍数]
 * @param  {[type]} $unit:px [单位]
 * @return {[type]}          [description]
 */

@mixin oPdMgSet($max:4, $mul:10, $unit:px) {
    @for $padding-size from 1 through $max {
        .pd-t#{$padding-size*$mul} {
            padding-top: $padding-size * $mul+$unit;
        }
        .pd-r#{$padding-size*$mul} {
            padding-right: $padding-size * $mul+$unit;
        }
        .pd-b#{$padding-size*$mul} {
            padding-bottom: $padding-size * $mul+$unit;
        }
        .pd-l#{$padding-size*$mul} {
            padding-left: $padding-size * $mul+$unit;
        }
        .pd-x#{$padding-size*$mul} {
            padding: 0 $padding-size * $mul+$unit;
        }
        .pd-y#{$padding-size*$mul} {
            padding: $padding-size * $mul+$unit 0;
        }
        .pd-f#{$padding-size*$mul} {
            padding: $padding-size * $mul+$unit;
        }
        .mg-t#{$padding-size*$mul} {
            margin-top: $padding-size * $mul+$unit;
        }
        .mg-r#{$padding-size*$mul} {
            margin-right: $padding-size * $mul+$unit;
        }
        .mg-l#{$padding-size*$mul} {
            margin-left: $padding-size * $mul+$unit;
        }
        .mg-b#{$padding-size*$mul} {
            margin-bottom: $padding-size * $mul+$unit;
        }
        .mg-x#{$padding-size*$mul} {
            margin: 0 $padding-size * $mul+$unit;
        }
        .mg-y#{$padding-size*$mul} {
            margin: $padding-size * $mul+$unit 0;
        }
        .mg-f#{$padding-size*$mul} {
            margin: $padding-size * $mul+$unit;
        }
    }
}
```
# 设置btn背景加hover时变亮
```
/**
 * [iBtnBgColor 设置btn背景加hover时变亮]
 * @param  {[type]} $color:gray [颜色]
 * @param  {[type]} $p:2        [增亮/变暗百分比]
 * @param  {[type]} $type:1     [>=1增亮<1变暗]
 * @return {[type]}             [description]
 */

@mixin iBtnBgColor($color:gray, $p:2, $type:1) {
    background-color: $color;
    &:hover {
        @if $type>0 {
            background-color: lighten($color, $p)
        }
        @else {
            background-color: darken($color, $p)
        }
    }
}
```
# 设置border
```
@mixin iBorder ($p:all,$c:gray,$style:solid,$width:1px) {
    @if $p == all {
        border: $width $style $c;
    } @else {
        border-#{$p}: $width $style $c;
    }
}
```

# 清除浮动
```
@mixin iCB($old:false) {
    @if $old {
        &:before,
        &:after {
            content: "";
            display: table;
            font: 0/0 a;
        }
    }
    @else {
        &:after {
            clear: both;
        }
    }
}
```

# 我的reset
```
@mixin reset() {
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    i {
        display: inline-block;
    }
}
```

