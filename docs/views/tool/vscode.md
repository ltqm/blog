---
title: vscode配置以及一些实用插件
date: 2019-10-28
sidebar: 'auto'
tags:
 - 工具
categories: 
 - 工具
---

:::tip
说到Vue的钩子函数，可能很多人只停留在一些很简单常用的钩子(created,mounted)，而且对于里面的区别，什么时候该用什么钩子，并没有仔细的去研究过，且Vue的生命周期在面试中也算是比较高频的考点，那么该如何回答这类问题，让人有眼前一亮的感觉呢...
::: 
<!-- more -->

## 保存时自动修复Eslint错误

### 安装VsCode的EsLint和vetur插件
### 为项目安装EsLint包
注意要安装在开发环境上，还有就是如果你使用的是脚手架的话，选了Eslint选项，会自带这些包。
### 在项目的根目录下添加.eslintrc.js
用于校验代码格式，根据项目情况，可自行编写校验规则：（脚手架搭建项目会带有规则）
```js
module.exports = {
    // Eslint规则
}
```
### vscode首选项设置
将下面这部分放入首选项设置中：
```json
"eslint.autoFixOnSave": true,  //  启用保存时自动修复,默认只支持.js文件
"eslint.validate": [
    "javascript",  //  用eslint的规则检测js文件
    {
        "language": "vue",   // 检测vue文件
        "autoFix": true   //  为vue文件开启保存自动修复的功能
    },
    {
        "language": "html",
        "autoFix": true
    },
]
```
### 一键修复多个文件命令

在package.json里面的scripts里面新增一条如下命令：
```js
"lint": "eslint --ext .js,.vue src --fix"
```
执行命令一键修复
```js
npm run lint
```
### .eslintignore 不检测一些文件
在项目的根目录创建一个.eslintignore文件，用于让EsLint不检测一些文件。

比如引的一些别人的文件，插件等,比如文件中：
```js
src/test/* 
src/test2/* 
```

## 个人使用的vscode配置文件

```json
{
    "git.ignoreMissingGitWarning": true,
    "editor.wordWrap": "on",
    "editor.mouseWheelZoom": true,
    "workbench.statusBar.visible": false,
    "explorer.confirmDelete": false,
    "git.autofetch": true,
    "git.confirmSync": false,
    "workbench.startupEditor": "newUntitledFile",
    "window.zoomLevel": -1,
    "files.autoSave": "off",
    "eslint.validate": [
      "javascript",
      {
        "language": "vue",
        "autoFix": true
      },
      {
        "language": "html",
        "autoFix": true
      }
    ],
    "eslint.run": "onSave",
    "eslint.autoFixOnSave": true,
    "editor.tabSize": 2,
    "editor.rulers": [
      120
    ],
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.scriptInitialIndent": true,
    "vetur.format.styleInitialIndent": true
  }
```