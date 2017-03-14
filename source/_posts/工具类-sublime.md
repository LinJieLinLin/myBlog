---
title: sublimetext相关
date: 2016-04-4 00:03:54
tags: 
- 工具
---
{% cq %} sublimetext快捷键 {% endcq %}
<!--more-->

# 我的插件
1. Babel
1. ColorPicker 颜色选择
1. ConvertToUTF8 解决中文乱码问题
1. HTML-CSS-JS Prettify 格式化代码
1. Terminal 打开linux shell
1. Side​Bar​Enhancements 扩展工具栏
1. SublimeLinter 代码检测的工具
1. BracketHighlighter 显示成对标签
1. HTML5
1. git
1. jquery
1. angularJS
1. scss
1. DocBlockr 注释
1. Markdown Preview
1. Material Theme 主题
1. GoSublime
1. Auto​File​Name 文件路径
1. Vue Syntax Highlight
1. Vuejs Snippets

# ubuntu 输入中文
[百度经验](http://jingyan.baidu.com/article/f3ad7d0ff8731609c3345b3b.html)

# sublimetext快捷键
```
Ctrl+Shift+P：打开命令面板
Ctrl+P：搜索项目中的文件
Ctrl+G：跳转到第几行
Ctrl+W：关闭当前打开文件
Ctrl+Shift+W：关闭所有打开文件
Ctrl+Shift+V：粘贴并格式化
Ctrl+D：选择单词，重复可增加选择下一个相同的单词
Ctrl+L：选择行，重复可依次增加选择下一行
Ctrl+Shift+L：选择多行
Ctrl+Shift+Enter：在当前行前插入新行
Ctrl+X：删除当前行
Ctrl+M：跳转到对应括号
Ctrl+U：软撤销，撤销光标位置
Ctrl+J：选择标签内容
Ctrl+F：查找内容
Ctrl+Shift+F：查找并替换
Ctrl+H：替换
Ctrl+R：前往 method
Ctrl+N：新建窗口
Ctrl+K+B：开关侧栏
Ctrl+Shift+M：选中当前括号内容，重复可选着括号本身
Ctrl+F2：设置/删除标记
Ctrl+/：注释当前行
Ctrl+Shift+/：当前位置插入注释
Ctrl+Alt+/：块注释，并Focus到首行，写注释说明用的
Ctrl+Shift+A：选择当前标签前后，修改标签用的
F11：全屏
Shift+F11：全屏免打扰模式，只编辑当前文件
Alt+F3：选择所有相同的词
Alt+.：闭合标签
Alt+Shift+数字：分屏显示
Alt+数字：切换打开第N个文件
Shift+右键拖动：光标多不，用来更改或插入列内容
鼠标的前进后退键可切换Tab文件
按Ctrl，依次点击或选取，可需要编辑的多个位置
按Ctrl+Shift+上下键，可替换行
```

# 配置react
## 安装插件
```
PC上ctrl+shift+p（MacCmd+shift+p）
jsx
babel
reactjs
jsxhint
node:
npm install -g jsxhint
```
## 语法高亮
```
babel
```
## 代码提示
```
reactJs
//支持的代码片段如下
cdm→  componentDidMount: fn() { ... }
cdup→  componentDidUpdate: fn(pp, ps) { ... }
cs→  var cx = React.addons.classSet;
cwm→  componentWillMount: fn() { ... }
cwr→  componentWillReceiveProps: fn(np) { ... }
cwu→  componentWillUpdate: fn(np, ns) { ... }
cwun→  componentWillUnmount: fn() { ... }
cx→  cx({ ... })
fdn→  React.findDOMNode(...)
fup→  forceUpdate(...)
gdp→  getDefaultProps: fn() { return {...} } 
gis→  getInitialState: fn() { return {...} } 
ism→  isMounted()
props→  this.props.
pt→  propTypes { ... }
rcc→  component skeleton
refs→  this.refs.
ren→  render: fn() { return ... }
scu→  shouldComponentUpdate: fn(np, ns) { ... }
sst→  this.setState({ ... })
state→  this.state.
```
## JSX中使用Emmet
### 在KeyBinding – Users中插入下面这段代码：
```
{
    "keys": ["tab"],
    "command": "expand_abbreviation_by_tab", 
    "context": [{
        "operand": "source.js", 
        "operator": "equal", 
        "match_all": true, 
        "key": "selector"
    },{
        "key": "preceding_text", 
        "operator": "regex_contains", 
        "operand": "(\\b(a\\b|div|span|p\\b|button)(\\.\\w*|>\\w*)?)", 
        "match_all": true
    },{
        "key": "selection_empty", 
        "operator": "equal", 
        "operand": true, 
        "match_all": true
    }]
  }
```
## 对齐
```
在HTML-CSS-JS Pretty中设置
在HTML-CSS-JS Prettify设置中，
在
"js": {
    "allowed_file_extensions": ["js", "json", "jshintrc", "jsbeautifyrc","jsx"],
    "e4x",true
    ...
    allowed_file_extensions后面加上"jsx"，修改e4x为true.
```

# 代码规范与代码质量（sublimeLinter  jshint csshint htmlhint） 
## HTML 代码规范
>项目所使用的 htmlhint 的配置文件如下：

```
htmlhint: {
    'tagname-lowercase'       : true,
    'attr-lowercase'          : true,
    'attr-value-double-quotes': true,
    'attr-value-not-empty'    : false,
    'attr-no-duplication'     : true,
    'doctype-first'           : true,
    'tag-pair'                : true,
    'tag-self-close'          : true,
    'spec-char-escape'        : true,
    'id-unique'               : true,
    'src-not-empty'           : true,
    'head-script-disabled'    : false,
    'alt-require'             : true,
    'doctype-html5'           : true,
    'id-class-value'          : 'dash',
    'space-tab-mixed-disabled': true,
    'style-disabled'          : true,
    'href-abs-or-rel'         : true
}
```

>详细描述：

规则名称 | 描述
-------- | -------
`tagname-lowercase` | HTML标签应该小写
`attr-lowercase` | HTML标签里面的属性名应该小写
`attr-value-double-quotes` | HTML标签里面的属性名应该使用双引号
`attr-value-not-empty` | HTML标签里面的属性值不应该为空
`attr-no-duplication` | HTML标签里面的属性不应该重复
`doctype-first` | HTML页面必须以 doctype 为开始
`tag-pair` | HTML标签应该成对匹配，除了自闭合的标签之外
`tag-self-close` | 对于自闭合的标签，必须写成自闭合的格式
`spec-char-escape` | 必须对特殊字符进行转义，如 `>` 转义为 `&gt;`
`id-unique` | 同个页面不能出现重复的 id 
`src-not-empty` | src 属性的值不应该为空
`alt-require` | 图片的 alt 必须加上
`doctype-html5` | 所有页面的 doctype 必须为 HTML5 的 doctype
`id-class-value` | id 和 class 的命名应该以 `-` 作为分隔，如 `<div class="icon-home"></div>`
`space-tab-mixed-disabled` | 页面里面不允许同时出现 tab 和空格。一律使用空格
`style-disabled` | 页面中不应该存在 style 标签，样式应该以外部文件的形式存在。
`href-abs-or-rel` | href 属性的值必须为绝对地址 或者 相对路径，如 `<a href="http://www.baidu.com"></a><a href="../index.html"></a>`



## CSS 代码规范

>项目所使用的 csslint 配置为：

```
csslint: {
    'box-sizing'                 : false,
    'box-model'                  : true,
    'display-property-grouping'  : true,
    'zero-units'                 : false,
    'bulletproof-font-face'      : false,
    'duplicate-properties'       : true,
    'empty-rules'                : true,
    'known-properties'           : true,
    'adjoining-classes'          : true,
    'compatible-vendor-prefixes' : true,
    'gradients'                  : true,
    'text-indent'                : false,
    'vendor-prefix'              : false,
    'fallback-colors'            : false,
    'star-property-hack'         : true,
    'underscore-property-hack'   : true,
    'font-faces'                 : false,
    'font-sizes'                 : true,
    'import'                     : true,
    'regex-selectors'            : true,
    'universal-selector'         : true,
    'unqualified-attributes'     : true,
    'overqualified-elements'     : true,
    'shorthand'                  : true,
    'duplicate-background-images': true,
    'floats'                     : false,
    'ids'                        : true,
    'important'                  : true,
    'outline-none'               : false
},

```

>详细介绍：

规则名称 | 规则介绍
-------- | ------
`box-model`                  | 当指定了元素的高度和宽度之后，再指定padding或者border则会导致实际显示的元素大小与所需的大小不一致。其根本原因是元素的盒模型。当有这种需求时则需要加多一条 `box-sizing` 的规则。
`display-property-grouping`  | `display` 规则的一些用法，比如 `display: inline-block` 之后就不应该再使用 `vertical-align` 。 深入阅读：[Require-properties-appropriate-for-display](https://github.com/CSSLint/csslint/wiki/Require-properties-appropriate-for-display)
`duplicate-properties`       | 不允许有重复的规则。规则细节：[disallow duplicate properties](https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-properties#rule-details)
`empty-rules`                | 不允许有空规则的存在。
`known-properties`           | 只允许使用已有的规则。用来检查是否拼错了规则名
`adjoining-classes`          | 不允许出现类似 `.foo {} .bar {} .foo.bar {}` 这样的情况，而是应该新建一个class。规则细节：[disallow adjoining class](https://github.com/CSSLint/csslint/wiki/Disallow-adjoining-classes#rule-details)
`compatible-vendor-prefixes` | 对于浏览器兼容的前缀，应该提供完整，比如如果提供了 `-webkit-` 那么其他的 `-moz-` 、`-o-`、`-ms-` 也要提供。
`gradients`                  | 应该使用完整的渐变代码
`star-property-hack`         | 不允许使用星号规则，如 `*z-index: -1`
`underscore-property-hack`   | 不允许使用下划线规则，如 `_z-index: -1`
`font-sizes`                 | 不应该使用过多的 `font-size` 规则，而是应该定义一套常用的字体大小的类，直接使用该类即可。
`import`                     | 不允许使用 import 来加载其他 css 文件
`regex-selectors`            | 不允许在 css 文件里面使用正则规则
`universal-selector`         | 不允许使用通配符。规则细节：[disallow universal selector](https://github.com/CSSLint/csslint/wiki/Disallow-universal-selector#rule-details)
`unqualified-attributes`     | 不允许使用属性选择器。规则细节：[disallow unqualified attribute selectors](https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors#rule-details)
`overqualified-elements`     | 规则细节 [disallow overqualified elements](https://github.com/CSSLint/csslint/wiki/Disallow-overqualified-elements#rule-details)
`shorthand`                  | 使用规则的简写方式。如背景的规则应该都写在 `background` 里面，而不是单独写 `background-image` `background -size` 等。
`duplicate-background-images`| 对于雪碧图而言，应该将图片的背景单独放在一个类，而不是在每个图标上都写着 `background-image`
`ids`                        | 不允许使用 id 选择器。
`important`                  | 不允许使用 `important` 。

## JS 代码规范

>jshint 的配置文件为：

```
jshint: {
    bitwise  : false,
    camelcase: true,
    curly    : true,
    eqeqeq   : true,
    forin    : true,
    browser  : true,
    jquery   : true,
    strict   : false,
    latedef  : true,
    noarg    : true,
    nonew    : true,
    plusplus : true,
    undef    : true,
    unused   : true,
    indent   : 4,
    globals: {
        angular: true,
        rcp: true
    }
},
```

>详细规则：

规则名称 | 规则介绍
------ | ------
`bitwise`  | 代码不应该存在位运算符，如 `^`、 `|`、 `&`
`camelcase`| 变量使用驼峰式命名规范，如 `var fooBar = true`
`curly`    | 不能省略`{` 和 `}` 。
`eqeqeq`   | 使用 `===` 进行对比运算，而不是 `==`
`forin`    | 在遍历对象的属性时，必须先对属性进行判断再编写业务逻辑。因为对象的属性有可能是来自原型的，而非自己独有的属性。
`browser`  | 声明js环境是在浏览器环境下运行的。
`jquery`   | 声明js默认引用了 Jquery
`latedef`  | 变量不允许在声明前调用，函数也是。
`noarg`    | 函数里面不允许使用 `arguments.callee` 和 `arguments.caller`。
`nonew`    | 避免在创建一个实例的时候不赋值给变量，如`new Contructor()`
`plusplus` | 不允许使用 `++` 或者 `--` 操作符。统一使用 `i += 1` 或者 `i = i + 1` ，主要是增强代码可读性
`undef`    | 不允许使用未定义的变量。
`unused`   | 不允许存在未使用的变量。
`indent`   | 统一使用4个空格作为缩进。

