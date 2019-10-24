---
title: 前端全局 Svg Icon 图标封装使用
date: 2019-10-17
sidebar: 'auto'
tags:
 - Conponenets
 - SVG
categories: 
 - Conponenets
---

:::tip
全局Svg Icon图标组件
::: 

## 组件封装

### 自动导入
首先我们创建一个专门放置图标 icon 的文件夹如：@/src/icons，将所有 icon 放在这个文件夹下。 之后我们就要使用到 webpack 的 [require.context](https://webpack.js.org/guides/dependency-management/#require-context)。
require.context有三个参数：
``` javascript
/**
 * directory：说明需要检索的目录
 * useSubdirectories：是否检索子目录
 * regExp: 匹配文件的正则表达式
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context(directory, useSubdirectories,regExp)
//const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
```

### webpack配置
这里要使用到 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) ， 它是一个 webpack loader ，可以将多个 svg 打包成 svg-sprite 。
``` git
npm install svg-sprite-loader -D
# via yarn
yarn add svg-sprite-loader -D
```
```javascript
	config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
```

### 组件封装代码
``` vue
<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'eh-svgIcons',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    isExternal () {
      return this.iconClass
    },
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    styleExternalIcon () {
      return {
        smask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style lang="scss" >
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .svg-external-icon {
    background-color: currentColor;
    display: inline-block;
  }
</style>
```


### Props

| 参数  | 说明  | 类型  | 可选值 | 默认值 | 版本 |
|-----|-----|-----|-----|-----|-----|
| icon-class | 为 icon 自定义 class  | String  | -   | -   | -   |
| class-name| icon 的名字 | String| -   | -   | -   |


### 详细文章

更多详细内容可阅读该文章：[手摸手，带你优雅的使用图标](https://juejin.im/post/59bb864b5188257e7a427c09)
