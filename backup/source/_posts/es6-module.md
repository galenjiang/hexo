---
title: es6模块
date: 2016-05-11 15:05:00
tags: [javascript,es6]
---
# es6 Module

## export

#### export 输出方式一：
```
export var firstName = "Galen";
export var lastName = "Jiang";
export var year = "1985";
```
#### export 输出方式二：
```
var firstName = "Galen";
var lastName = "Jiang";
var year = "1985";
export {firstName, lastName, year};
```
#### 输出重命名
```
export {
  firstName as fN,
  lastName as lN,
  year as y
}
```



## import

#### 输入命令
```
import { firstName, lastName, year } from './app'

console.log(firstName)
```
#### 输入重命名
```
import { firstName as fN } from './app'

```
#### 整体输入
```
import * as person from './app';
console.log(person.firstName);
console.log(person.lastName);

```

#### export default默认输出输入
```
export default function(){
console.log("foo")
}
或者
export default function foo(){
console.log("foo")
}
或者
function foo() {
  console.log("foo");
}
export default foo;

import foo from './app';
foo()
```
