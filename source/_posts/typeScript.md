---
title: typeScript
date: 2021-11-02 22:03:54
tags:
  - typeScript
---

{% blockquote %} typeScript 相关 {% endblockquote %}

## tsconfig.json 编译配置项[https://www.tslang.cn/docs/handbook/compiler-options.html](https://www.tslang.cn/docs/handbook/compiler-options.html)

<!--more-->

## ts 访问器,key 自动补全任意层级

> 很多时候我们会对配置类型写一个访问器, 用 key1.key2.key3 这样的形式来访问深层内容. 这代码用 JavaScript 写起来很容易, 一行就能搞定:

```javascript
function get(data, key, defaultValue) {
  return key.split('.').reduce((o, x) => o[x], data) ?? defaultValue
}
```

### 用 TS,在第一个参数类型确定的情况下, key 自动补全任意层级, 返回的 value 类型正确

```javascript
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

```typeScript
type FileId<
    T extends Record<string, any>,
    K = KeyOf<T>, // 这里获取当前 T 的所有 key
> = K extends string
        ? (K | `${K}.${FileId<T[K]>}`)
        : never
```

# 内置映射类型

## Awaited<> 获取 Promise 的返回值

```
Awaited<Type>
type A = Awaited<Promise<string>>;

type A = string

type B = Awaited<Promise<Promise<number>>>;

type B = number

type C = Awaited<boolean | Promise<number>>;

type C = number | boolean
```

## Partial<> 所有属性都设置为可选

```
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

## Required<> 所有属性都设置为必选

```
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

## Readonly<> 所有属性都设置为只读(第一层级有用)

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
  description: "Find and delete all inactive users",
  completed: false,
}
todo.title = "Hello"
Property 'title' is readonly and cannot be assigned to.
```

## Record<> 创建一个对象类型, 属性名是 K, 属性值是 T

```
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

const cats: Record<CatName, CatInfo>
```

## Pick<T, K extends keyof T> 从一个对象中选取指定的属性

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

```

## Omit<T, K extends keyof any> 从一个对象中删除指定的属性

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```

## Exclude<T, U> 从一个类型中删除指定的类型

```
type T0 = Exclude<"a" | "b" | "c", "a">;

type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T1 = "c"
```

## Extract<T, U> 从一个类型中提取指定的类型

```
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;

type T1 = () => void
```

## NonNullable<> 从一个类型中删除 null 和 undefined

```
type T0 = NonNullable<string | number | undefined>;

type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;

type T1 = string[]
```

## Parameters<> 获取函数参数类型

```
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;

type T0 = []
type T1 = Parameters<(s: string) => void>;

type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;

type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;

type T3 = [arg: {
    a: number;
    b: string;
}]
type T4 = Parameters<any>;

type T4 = unknown[]
type T5 = Parameters<never>;

type T5 = never
```

## ConstructorParameters<> 获取构造函数参数类型

```
type T0 = ConstructorParameters<ErrorConstructor>;

type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;

type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;

type T2 = [pattern: string | RegExp, flags?: string]
class C {
  constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>;

type T3 = [a: number, b: string]
type T4 = ConstructorParameters<any>;

type T4 = unknown[]
```

## ReturnType<> 获取函数返回值类型

```
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;

type T0 = string
type T1 = ReturnType<(s: string) => void>;

type T1 = void
```

## InstanceType<> 获取构造函数的实例类型

```
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;

type T0 = C
type T1 = InstanceType<any>;

type T1 = any
type T2 = InstanceType<never>;

type T2 = never
```

## NoInfer<>阻止对包含类型的推理

```
function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>,
) {
  // ...
}
createStreetLight(["red", "yellow", "green"], "red");  // OK
createStreetLight(["red", "yellow", "green"], "blue");  // Error
```

## ThisParameterType<> 获取函数的 this 参数类型,如果函数类型没有参数，则为 void

```
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
```

## OmitThisParameter<> 删除函数的 this 参数类型

```
function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
```

## ThisType<> 获取函数的 this 参数类型,如果函数类型没有参数，则为 void

```
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

## Uppercase<> 将字符串转换为大写

```
type Uppercase<S extends string> = intrinsic;
type T0 = Uppercase<"hello world">;
type T0 = "HELLO WORLD"
type T1 = Uppercase<"fooBar">;
type T1 = "FOOBAR"
```

## Lowercase<> 将字符串转换为小写

```
type Lowercase<S extends string> = intrinsic;
type T0 = Lowercase<"HELLO WORLD">;
type T0 = "hello world"
type T1 = Lowercase<"fooBar">;
type T1 = "foobar"
```

## Capitalize<> 将字符串的首字母转换为大写

```
type Capitalize<S extends string> = intrinsic;
type T0 = Capitalize<"hello world">;
type T0 = "Hello world"
type T1 = Capitalize<"fooBar">;
type T1 = "FooBar"
type T2 = Capitalize<"1234">;
type T2 = "1234"
type T3 = Capitalize<"">;
type T3 = ""
type T4 = Capitalize<"foo">;
type T4 = "Foo"
```

## Uncapitalize<> 将字符串的首字母转换为小写

```
type Uncapitalize<S extends string> = intrinsic;
type T0 = Uncapitalize<"HELLO WORLD">;
type T0 = "hELLO WORLD"
type T1 = Uncapitalize<"fooBar">;
type T1 = "fooBar"
type T2 = Uncapitalize<"1234">;
type T2 = "1234"
type T3 = Uncapitalize<"">;
type T3 = ""
type T4 = Uncapitalize<"foo">;
type T4 = "foo"
```

## Intrinsic<> 获取内置类型

```
type T0 = Intrinsic<"string">;
type T0 = string
type T1 = Intrinsic<"number">;
type T1 = number
type T2 = Intrinsic<"boolean">;
type T2 = boolean
type T3 = Intrinsic<"symbol">;
type T3 = symbol
type T4 = Intrinsic<"bigint">;
type T4 = bigint
type T5 = Intrinsic<"undefined">;
type T5 = undefined
type T6 = Intrinsic<"null">;
type T6 = null
type T7 = Intrinsic<"object">;
type T7 = object
type T8 = Intrinsic<"any">;
type T8 = any
type T9 = Intrinsic<"unknown">;
type T9 = unknown
type T10 = Intrinsic<"never">;
type T10 = never
type T11 = Intrinsic<"void">;
type T11 = void
```
