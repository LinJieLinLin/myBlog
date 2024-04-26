---
title: aria无障碍
date: 2023-04-07 21:54:32
tags:
  - aria
---

{% blockquote %} aria 无障碍标签 {% endblockquote %}

<!--more-->

## 名词解释

1. aria-activedescendant：标识当前活动元素的 ID。
1. aria-atomic：指示屏幕阅读器是否应该在更改时呈现整个或部分文档。
1. aria-autocomplete：指示输入字段的自动完成行为。
1. aria-busy：指示是否有正在进行的操作。
1. aria-checked：指示元素的选中状态。
1. aria-colcount：指示表格的列数。
1. aria-colindex：指示元素在表格中的列索引。
1. aria-colspan：指示元素横跨的列数。
1. aria-controls：指示由当前元素控制的元素。
1. aria-current：指示当前选中的日期、时间或文本。
1. aria-describedby：指定元素的描述性文本。
1. aria-details：指定更详细信息的元素。
1. aria-disabled：指示元素是否禁用。
1. aria-dropeffect：指示元素支持的拖放操作。
1. aria-errormessage：指定包含元素错误消息的 ID。
1. aria-expanded：指示折叠或展开状态。
1. aria-flowto：指定元素应该跳转到的元素。
1. aria-grabbed：指示元素是否被拖拽。
1. aria-haspopup：指示元素是否具有弹出菜单。
1. aria-hidden：指示元素是否可见。
1. aria-invalid：指示元素是否包含无效值。
1. aria-keyshortcuts：指定键盘快捷键。
1. aria-label：提供元素的可读标签。
1. aria-labelledby：指定元素的标题元素。
1. aria-level：指示标题级别。
1. aria-live：指示动态内容的更新方式。
   1. off: 这表示元素的内容不会被自动地通知给用户。这在一些情况下可以用来暂时禁用对该元素的通知。
   1. assertive: 这表示辅助技术应该立即通知用户。通常情况下，用户辅助技术会中断当前的活动来立即通知用户，因此这个级别应该保留给非常重要的内容。
   1. polite: 这表示辅助技术应该在用户正在交互的时候通知用户。辅助技术可以选择在合适的时候通知用户，而不会立即打断他们的操作。
1. aria-modal：指示是否模态对话框。
1. aria-multiline：指示文本字段是否为多行。
1. aria-multiselectable：指示是否可以选择多个项。
1. aria-orientation：指示控件的方向。
1. aria-owns：指示由元素拥有的元素。
1. aria-placeholder：指示输入字段的预期值。
1. aria-posinset：指示元素在集合中的位置。
1. aria-pressed：指示按钮的按下状态。
1. aria-readonly：指示元素是否只读。
1. aria-relevant：指示用户代理应该在何时通知用户。
1. aria-required：指示输入字段是否为必填项。
1. aria-role：指定元素的角色。
   1. alert：表示一个需要用户注意的消息或通知。
   1. alertdialog：表示一个需要用户注意的模态对话框。
   1. button：表示一个按钮。
   1. checkbox：表示一个复选框。
   1. dialog：表示一个对话框。
   1. grid：表示一个网格结构，通常用于表格。
   1. heading：表示一个标题，可以指定级别（例如，role="heading" aria-level="2"）。
   1. link：表示一个链接。
   1. listbox：表示一个列表框，通常用于下拉菜单。
   1. menu：表示一个菜单。
   1. menuitem：表示菜单中的一个项。
   1. progressbar：表示一个进度条。
   1. radio：表示一个单选按钮。
   1. radiogroup：表示单选按钮的组。
   1. slider：表示一个滑块。
   1. spinbutton：表示一个微调按钮。
   1. status：表示一个状态信息。
   1. tab：表示一个选项卡。
   1. tabpanel：表示选项卡的内容区域。
   1. textbox：表示一个文本输入框。
   1. toolbar：表示一个工具栏。
1. aria-roledescription：指定角色的可读描述。
1. aria-rowcount：指示表格的行数。
1. aria-rowindex：指示元素在表格中的行索引。
1. aria-rowspan：指示元素跨越的行数。
1. aria-selected：指示元素是否被选择。
1. aria-setsize：指示集合的大小。
1. aria-sort：指示表头的排序状态。
1. aria-valuemax：指定值的最大值。
1. aria-valuemin：指定值的最小值。
1. aria-valuenow：指定当前值。
1. aria-valuetext：指定当前值的可读文本表示。
