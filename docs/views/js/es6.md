---
title: ES6
date: 2019-10-20
sidebar: 'auto'
tags:
 - JS
 - ES6
categories: 
 - JS
---

:::tip
<!-- 为了有效的维护和开发项目，代码的重复利用就显得尤为重要。在Sass中，除了@import和@extend可以使你的代码更加具有重复利用性，@mixin指令也同样能提高你代码的重复使用率并简化你的代码。 -->
::: 

<!-- more -->

## 箭头函数
```js

const number = [1,2,3,4,5,6]
const double = number.map((number)=>{
  return number *2  //显式返回
})
const doubles = number.map((number)=> number *2) //隐式返回
console.log(double) //(6) [2, 4, 6, 8, 10, 12]  
console.log(doubles) //(6) [2, 4, 6, 8, 10, 12]

function greet(name){
  console.log(name)
}
const greet = name => { console.log(name) }
greet(name)
```
## 函数参数的默认值
```js
  function multiply(a = 5, b = 3){
    return a + b
  }
  multiply() //console.log(15)
  multiply(3) //console.log(9)
  multiply(,3) //报错  不能这样使用
  multiply(undefined,3) //console.log(15)
```
## 