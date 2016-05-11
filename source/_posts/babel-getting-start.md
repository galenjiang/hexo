---
title: babel 入门
date: 2016-05-11 15:08:56
tags: [javascript, es6]
---
## 搭建babel-es2015环境
### 安装babel

```
npm install --save-dev babel-cli
```
### 配置babelrc
* 基础配置

```
npm install --save-dev babel-preset-es2015 babel-preset-stage-0

```

> 新建 .babelrc 文件加入字段
```
{
  "presets": ["es2015", "stage-0"],
  "plugins": []
}

```
* polyfill配置
```
npm install --save babel-polyfill
```
> 文件引入
```
import "babel-polyfill";
```

* runtime 环境配置
```
$ npm install --save-dev babel-plugin-transform-runtime
$ npm install --save babel-runtime
```
> .babelrc 加入
```
{
  "plugins": ["transform-runtime"]
}

```
