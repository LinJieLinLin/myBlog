---
title: sublimetext快捷键
date: 2016-04-4 00:03:54
tags: 
- 工具
---
{% cq %} sublimetext快捷键 {% endcq %}
<!--more-->
# sublimetext快捷键
* Ctrl+Shift+P：打开命令面板
* Ctrl+P：搜索项目中的文件
* Ctrl+G：跳转到第几行
* Ctrl+W：关闭当前打开文件
* Ctrl+Shift+W：关闭所有打开文件
* Ctrl+Shift+V：粘贴并格式化
* Ctrl+D：选择单词，重复可增加选择下一个相同的单词
* Ctrl+L：选择行，重复可依次增加选择下一行
* Ctrl+Shift+L：选择多行
* Ctrl+Shift+Enter：在当前行前插入新行
* Ctrl+X：删除当前行
* Ctrl+M：跳转到对应括号
* Ctrl+U：软撤销，撤销光标位置
* Ctrl+J：选择标签内容
* Ctrl+F：查找内容
* Ctrl+Shift+F：查找并替换
* Ctrl+H：替换
* Ctrl+R：前往 method
* Ctrl+N：新建窗口
* Ctrl+K+B：开关侧栏
* Ctrl+Shift+M：选中当前括号内容，重复可选着括号本身
* Ctrl+F2：设置/删除标记
* Ctrl+/：注释当前行
* Ctrl+Shift+/：当前位置插入注释
* Ctrl+Alt+/：块注释，并Focus到首行，写注释说明用的
* Ctrl+Shift+A：选择当前标签前后，修改标签用的
* F11：全屏
* Shift+F11：全屏免打扰模式，只编辑当前文件
* Alt+F3：选择所有相同的词
* Alt+.：闭合标签
* Alt+Shift+数字：分屏显示
* Alt+数字：切换打开第N个文件
* Shift+右键拖动：光标多不，用来更改或插入列内容
* 鼠标的前进后退键可切换Tab文件
* 按Ctrl，依次点击或选取，可需要编辑的多个位置
* 按Ctrl+Shift+上下键，可替换行

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


