---
title: typeScript
date: 2021-11-02 22:03:54
tags:
  - typeScript
---

{% blockquote %} typeScript 相关 {% endblockquote %}

## tsconfig.json编译配置项[https://www.tslang.cn/docs/handbook/compiler-options.html](https://www.tslang.cn/docs/handbook/compiler-options.html)
<!--more-->
## ts访问器,key自动补全任意层级

> 很多时候我们会对配置类型写一个访问器, 用 key1.key2.key3 这样的形式来访问深层内容. 这代码用JavaScript写起来很容易, 一行就能搞定:

```javascript
function get(data, key, defaultValue) {
    return key.split('.').reduce((o, x) => o[x], data) ?? defaultValue;
}
```

### 用TS,在第一个参数类型确定的情况下, key自动补全任意层级, 返回的value类型正确

``` javascript
const STORAGE = {
    redis: {
        host: 'localhost',
        port: 3000
    }
}

// keyof without function
type KeyOf<T extends Record<string, any>, K = keyof T> = K extends string ? (T[K] extends Function ? never : K) : never
type FileId<T extends Record<string, any>, K = KeyOf<T>> = K extends string ? (K | `${K}.${FileId<T[K]>}`) : never
type ValueOf<T extends Record<string, any>, K> = K extends `${infer I}.${infer R}` ? ValueOf<T[I], R> : (K extends string ? T[K] : never)

function get<T, K extends FileId<T>>(data: T, key: K, defaultValue?: ValueOf<T, K>): ValueOf<T, K> | undefined {
    return key.split('.').reduce((o, x) => o[x], data as any) ?? defaultValue;
}

const host = get(STORAGE, 'redis.host')

console.log(host)
```

### FileId

> FileId 的作用是将一个类型的属性名称转换为一组字符串, 以便能够用 . 进行层级访问.

``` typeScript
type FileId<
    T extends Record<string, any>,
    K = KeyOf<T>, // 这里获取当前 T 的所有 key
> = K extends string
        ? (K | `${K}.${FileId<T[K]>}`)
        : never
```
