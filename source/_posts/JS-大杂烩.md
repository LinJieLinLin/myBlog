---
title: JS
date: 2016-04-4 00:03:54
tags:
  - JS
categories: [web]
---

{% blockquote %} 与 JS 相关的一些学习记录 {% endblockquote %}

<!--more-->

# [测试浏览器支持的 localStorage 大小](https://arty.name/localstorage.html)

## 获取当前存储大小

```
if(window.localStorage){
    var hasUse =unescape(encodeURIComponent(JSON.stringify(localStorage))).length;
    alert(hasUse);
}
```

# 原生

## 标签页激活状态 visibilitychange

```
// 各种浏览器兼容
var hidden, state, visibilityChange;
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
    state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
    state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
    state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
    state = "webkitVisibilityState";
}

// 添加监听器，在title里显示状态变化
document.addEventListener(visibilityChange, function() {
    document.title = document[state];
}, false);

// 初始化
document.title = document[state];
```

# 为每个元素添加 outline for chrome

```
[].forEach.call($$("*"),function(a){

  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)

})
```

# angular

## 获取 scope 元素

```
var a = angular.element('body[ng-controller="yourCtrl"]').scope()
```

## 广播通信

```
<!--父级-->
<div ng-controller="ParentCtrl">
    <!--自己-->
    <div ng-controller="SelfCtrl">
        <a ng-click="click()">click me</a>
        <!--子级-->
        <div ng-controller="ChildCtrl"></div>
    </div>
    <!--平级-->
    <div ng-controller="BroCtrl"></div>
</div>
```

```
app.controller('SelfCtrl', function($scope) {
    $scope.click = function () {
        $scope.$broadcast('to-child', 'child');
        $scope.$emit('to-parent', 'parent');
    }
});

app.controller('ParentCtrl', function($scope) {
    $scope.$on('to-parent', function(event,data) {
        //父级能得到值
        console.log('ParentCtrl', data);
    });
    $scope.$on('to-child', function(event,data) {
        //子级得不到值
        console.log('ParentCtrl', data);
    });
});

app.controller('ChildCtrl', function($scope){
    $scope.$on('to-child', function(event,data) {
        //子级能得到值
        console.log('ChildCtrl', data);
    });
    $scope.$on('to-parent', function(event,data) {
        //父级得不到值
        console.log('ChildCtrl', data);
    });
});

app.controller('BroCtrl', function($scope){
    $scope.$on('to-parent', function(event,data) {
        //平级得不到值
        console.log('BroCtrl', data);
    });
    $scope.$on('to-child', function(event,data) {
        //平级得不到值
        console.log('BroCtrl', data);
    });
});
```

## 模拟 href（异步新页面打开不支持）

```
$scope.eventTest = function($event) {
    if ($event.target.href === window.location.href) {
        //阻止事件冒泡
        $event.preventDefault();
        $timeout(function() {
            $event.target.href = 'your href';
            $timeout(function() {
                $event.target.click();
            });
        },0);
    }
};
```
