---
title: JS
date: 2016-04-4 00:03:54
tags: 
- JS
---
{% cq %} 与JS相关的一些学习记录 {% endcq %}
<!--more-->
# angular
## 获取scope元素
```var a = angular.element('body[ng-controller="yourCtrl"]').scope()
```
## 广播通信
```<!--父级-->
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

