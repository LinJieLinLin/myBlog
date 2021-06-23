---
title: SCSS_MIXIN
<!-- date: 2016-04-18 22:57:05 -->
tags: [编程, 感悟]
categories: [web]
---

{% blockquote %} scss mixin 相关收集 {% endblockquote %}

<!--more-->

# 设置 12 到 40px 的字体大小相隔 2px eg:fs-12

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

# 默认设置 10 到 40 的各个 padding margin

```
/**
 * [oPdMgSet 默认设置10到40的各个ppadding margin]
 * @param  {[type]} $max:4   [基数]
 * @param  {[type]} $mul:10  [倍数]
 * @param  {[type]} $unit:px [单位]
 * @return {[type]}          [description]
 */

@mixin oPdMgSet($max:10, $mul:5, $unit:px) {
  @for $padding-size from 1 through $max {
    .pd-x#{$padding-size*$mul} {
      padding: 0 $padding-size * $mul+$unit;
    }
    .pd-y#{$padding-size*$mul} {
      padding: $padding-size * $mul+$unit 0;
    }
    .pd-f#{$padding-size*$mul} {
      padding: $padding-size * $mul+$unit;
    }
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
    .mg-x#{$padding-size*$mul} {
      margin: 0 $padding-size * $mul+$unit;
    }
    .mg-y#{$padding-size*$mul} {
      margin: $padding-size * $mul+$unit 0;
    }
    .mg-f#{$padding-size*$mul} {
      margin: $padding-size * $mul+$unit;
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
  }
}
```

# 设置 btn 背景加 hover,active 时变亮变暗

```
/**
 * [iBtnBgColor 设置btn背景加hover,active时变亮变暗]
 * @param  {[type]} $color:gray     [初始颜色]
 * @param  {[type]} $hover:2        [hover颜色或百分比]
 * @param  {[type]} $active:10      [active颜色或百分比]
 * @param  {[type]} $type:1         [=0使用传入的颜色，>1变亮，<1变暗]
 * @param  {[type]} $time:1         [动画时间 eg:0.3s]
 * @param  {[type]} $animation:1    [动画属性 eg: ease]
 * @return {[type]}             [description]
 */

@mixin iBtnBgColor($color:gray, $hover:2, $active:10, $type:1, $time:0.3s, $animation:ease) {
    background-color: $color;
    &:hover {
        @if $type==0 {
            background-color: $hover
        }
        @if $type>0 {
            background-color: lighten($color, $hover)
        }
        @if $type<0 {
            background-color: darken($color, $hover)
        }
        transition: all $time $animation;
    }
    &:active {
        @if $type==0 {
            background-color: $active
        }
        @if $type>0 {
            background-color: lighten($color, $active)
        }
        @if $type<0 {
            background-color: darken($color, $active)
        }
    }
}
```

# 设置 border

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
            content: "";
            display: block;
            clear: both;
        }
    }
}
```

# flex

```
@mixin oFlex() {
  // http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
  //  flex-direction属性决定主轴的方向（即项目的排列方向）。
  //  flex-wrap 属性定义，如果一条轴线排不下，如何换行
  //  flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
  // justify-content属性定义了项目在主轴(x轴)上的对齐方式。
  // align-items属性定义项目在交叉轴(y轴)上如何对齐。
  // align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  // order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
  //  flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  //  flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  //  flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
  //  flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
  // align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
  .flex1 {
    flex: 1
  }
  .flex2 {
    flex: 2
  }
  .flex3 {
    flex: 3
  }
  .flex4 {
    flex: 4
  }
  .flex5 {
    flex: 5
  }
  .flex-box {
    display: flex;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .flex-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .flex-space-between-end {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: flex-end;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .flex-middle {
    display: flex;
    align-items: center;
  }
  .flex-stretch {
    display: flex;
    align-items: stretch;
  }
  .flex-end {
    align-self: flex-end;
  }
  .flex-start {
    align-items: flex-start;
  }
  .flex-noshrink {
    flex-shrink: 0;
  }
}
```

# 我的 reset

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
