---
title: 移动端web
date: 2016-04-02 00:03:54
tags:
  - web
categories: [web]
---

{% blockquote %} 移动端 web 相关 {% endblockquote %}

<!--more-->

## meta 标签

1、width：设置布局视口的宽
2、init-scale：设置页面的初始缩放程度
3、minimum-scale：设置了页面最小缩放程度
4、maximum-scale：设置了页面最大缩放程度
5、user-scalable：是否允许用户对页面进行缩放操作

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

## [媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)

```css
@media all and (min-width: 321px) and (max-width: 400px){
    html{
        background: red;
    }
}
```

## 网页调移动端的函数

```js
 /**
  * 获取浏览器信息
  * @return {[type]} [description]
  */
 function getOSInfo() {
     var D = {};
     D.ua = navigator.userAgent;
     D.uaTLC = D.ua.toLowerCase();
     D.platform = navigator.platform;
     D.isCrosswalk = navigator.userAgent.indexOf('Crosswalk') > -1;
     D.isLinux = (String(D.platform).indexOf('Linux') > -1);
     D.isWin = D.platform === ('Win32' || 'Windows');
     D.isMac = D.platform === ('Mac68K' || 'MacPPC' || 'Macintosh' || 'MacIntel');
     D.isUnix = (D.platform === 'X11') && !D.isWin && !D.isMac;
     D.isSymbian = D.platform === ('SymbianOS');
     D.bIsCE = D.uaTLC.match(/windows ce/i);
     D.bIsWM = D.uaTLC.match(/windows mobile/i);
     D.bIsAndroid = D.uaTLC.match(/android/i);
     D.bIsIpad = D.uaTLC.match(/ipad/i);
     D.bIsIphoneOs = D.uaTLC.match(/iphone os/i);
     D.bIsMidp = D.uaTLC.match(/midp/i);
     D.bIsUc7 = D.uaTLC.match(/rv:1.2.3.4/i);
     D.bIsUc = D.uaTLC.match(/ucweb/i);
     D.mobile = (D.bIsIpad || D.bIsIphoneOs || D.bIsMidp || D.bIsUc7 || D.bIsUc || D.bIsAndroid || D.bIsCE || D.bIsWM || D.isSymbian) ? true : false;
     D.pc = D.mobile ? false : true;
     D.name = (D.bIsIpad) ? 'iPad' : (D.bIsIphoneOs) ? 'iPhone' : (D.bIsMidp) ? 'midp' : (D.bIsUc7) ? 'Uc7' : (D.bIsUc) ? 'Ucweb' : (D.isMac) ? 'Mac' : (D.isLinux) ? ((D.bIsAndroid) ? 'Android' : 'Linux') : (D.isSymbian) ? 'SymbianOS' : (D.bIsCE || D.bIsWM) ? 'wm' : 'other';
     if (D.isWin) {
         D.isWin2K = D.ua.indexOf('Windows NT 5.0') > -1 || D.ua.indexOf('Windows 2000') > -1;
         D.isWinXP = D.ua.indexOf('Windows NT 5.1') > -1 || D.ua.indexOf('Windows XP') > -1;
         D.isWin2003 = D.ua.indexOf('Windows NT 5.2') > -1 || D.ua.indexOf('Windows 2003') > -1;
         D.isWinVista = D.ua.indexOf('Windows NT 6.0') > -1 || D.ua.indexOf('Windows Vista') > -1;
         D.isWin7 = D.ua.indexOf('Windows NT 6.1') > -1 || D.ua.indexOf('Windows 7') > -1;
         D.isWin8 = D.ua.indexOf('Windows NT 6.2') > -1 || D.ua.indexOf('Windows 8') > -1;
         D.isWin10 = D.ua.indexOf('Windows NT 10') > -1 || D.ua.indexOf('Windows 10') > -1;
         D.name = (D.isWin2K) ? 'Win2000' : (D.isWinXP) ? 'WinXP' : (D.isWin2003) ? 'Win2003' : (D.isWinVista) ? 'WinVista' : (D.isWin7) ? 'Win7' : (D.isWin8) ? 'Win8' : (D.isWin10) ? 'win10' : 'other';
     }
     return D;
 }
 /**
  * [判断android或ios手机并触发相关事件]
  * @param  {[type]} argType   [事件类型]
  * @param  {[type]} argData   [数据]
  * @return {[type]}           [description]
  */
 function mobilePlug(argType, argData) {
     var osName = getOSInfo().name;
     //判断是否为iPad or iPhone,否则为android
     switch (osName) {
         case 'iPad':
         case 'iPhone':
             //执行iphone事件
             iphoneEvent(argType, argData);
             break;
         default:
             //执行android事件
             androidEvent(argType, argData);
     }
 }
 /**
  * [iphoneEvent ios事件]
  * @param  {[type]} argType   [事件类型]
  * @param  {[type]} argData   [数据]
  * @return {[type]}        [description]
  */
 function iphoneEvent(argType, argData) {
     var data = {};
     switch (argType) {
         case 'testFunc':
             // key为要调用的ios函数名，value为传入的参数
             data[argType] = argData;
             window.webkit.messageHandlers.notification.postMessage(data);
             break;
         default:
             console.log('还没有此函数：' + argType);
     }
 }
 /**
  * [androidEvent 安卓事件]
  * @param  {[type]} argType   [事件类型]
  * @param  {[type]} argData   [数据]
  * @return {[type]}        [description]
  */
 function androidEvent(argType, argData) {
     var androidFunc = getOSInfo().isCrosswalk ? NativeJsInterface : window.NativeJsInterface;
     switch (argType) {
         case 'testFunc':
             androidFunc[argType](params.src);
             break;
         default:
             console.log('还没有此函数：' + argType);
     }
 }
 // 使用
 mobilePlug('testFunc', { name: 'c1', password: 123456 });

```
