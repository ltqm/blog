---
title: sass的@mixin专题
date: 2019-10-19
sidebar: 'auto'
tags:
 - SASS CSS
categories: 
 - CSS
---

:::tip
为了有效的维护和开发项目，代码的重复利用就显得尤为重要。在Sass中，除了@import和@extend可以使你的代码更加具有重复利用性，@mixin指令也同样能提高你代码的重复使用率并简化你的代码。
::: 

<!-- more -->

## 定义Mixins

通过[@mixin加名称](https://sass-lang.com/documentation/at-rules/mixin)的方式就可以定义一个Mixins模块，在模块内你可以添加任何你想重复使用的样式。

``` CSS
@mixin button {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
}
```
由于历史原因，连字符和下划线被认为是相同的，也就是说 @mixin button-large { } 和 @mixin button_large { } 是一样的。

Mixins能够包含任何在 CSS 和 Sass 中[有效的内容](http://vanseodesign.com/css/how-to-nest-selectors-and-properties-in-sass/)。

```CSS
@mixin link {  
    a {  
        color: blue;

        &:visited {
            color: purple;
        }  
        &:hover {
            color: white;
        }  
        &:active {
            color: red;
        }  
    }
}
```

## 使用@mixin指令

你可以通过@include来调用具有相同名称的mixin模块。
```CSS
.button-green {  
    @include button;  
    background-color: green;  
}
```
比如通过@include调用我之前创建名为button的mixin模块，那么解析后的CSS就如下所示：
```CSS
.button-green {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    background-color: green;  
}
```
正如你所预期的那样，@include被名为button的混合模块内的样式所取代。同时我在.button-green中添加的background-color样式依然保留着。

在mixin模块的定义中还可以包含其他的mixin。比如：

```CSS
@mixin button-blue {  
    @include button;  
    @include link;  
}
```
所以你可以通过以包含多种简单mixin模块的方式创建较为复杂的mixin模块。

当Mixins模块包含选择器和规则集，也就是mixins包含的内容本身就是有效的CSS样式时，他们就可以在其他规则集外被调用。比如本文之前创建的名为link的mixin模块：

```CSS
@mixin link {  
    a {  
        color: blue;

        &:visited {
            color: purple;
        }  
        &:hover {
            color: white;
        }  
        &:active {
            color: red;
        }  
    }
}
```
之后我们可以直接调用这个模块，即使不在一个选择器内。
```CSS
@include link;
```
这段代码将会被解析为：
```CSS
a {  
    color: blue;

    &:visited {
        color: purple;
    }  
    &:hover {
        color: white;
    }  
    &:active {
        color: red;
    }  
}
```
之所以能这样调用是因为这个mixin模块内既包含了选择器也包含了样式，如果没有选择器，那么编译后将不会有内容显示。比如我们在选择器外直接调用button这个mixin模块，那么将不会有东西被编译。
```CSS
@mixin button {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
}

@include button;
```
不会被编译是因为你的样式没有被应用到任何元素上。

## 参数的使用

Mixins可以接收和使用参数，这使得它比@extend更加强大和灵活。我更新了之前的button模块，增加了名为background的参数并将其传递给模块。
```CSS
@mixin button($background) {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    background: $background;  
}
```
注意到参数被设置为一个变量并成为backround属性的值。如果我们想创建一个绿色的按钮，那么就可以使用以下代码：
```CSS
.button-green {  
    @include button(green);  
}
```
当Sass被编译时，值green就被传递给@mixin并[成为变量](http://vanseodesign.com/css/how-to-use-sass-variables/)$backround的值。编译后的代码如下：
```CSS
.button-green {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    background: green;  
}
```
你还可以在@mixin和@include中传递多个参数，参数间用逗号隔开。比如：
```CSS
@mixin button($background, $color) {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: $color;  
    background: $background;  
}

.button-green {  
    @include button(green, #fff);  
}
```

## 给参数设置默认值
你可能会好奇如果在定义mixin时定义了参数，但是在@include调用时没有传递参数会发生什么。这种情况下你会收到一个编译错误的提示。同时我相信这种情况一定不是你想看到的。你可以通过在mixin中定义参数的时候给它设置一个默认值，从而来避免这种错误。
```CSS
@mixin button($background: green) {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    background: $background;  
}
```
现在如果你在调用的时候忘记传递参数值
```CSS
.button-green {  
    @include button;  
}
```
你的代码将会使用你设置的参数默认值来解析，在这个例子中也就是green这个值。
```CSS
.button-green {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    background: green;  
}
```
当然，你也可以通过提供一个参数值来覆盖这个默认值。
```CSS
.button-blue {  
    @include button(blue);  
}
```
这时将会使用你提供的值来编译代码
```CSS
.button-blue {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    background: blue;  
}
```


## 关键字参数
为了帮助你的代码更加容易理解，你可以在传递值给mixin时将参数名称和参数值一并传递过去。
关键字参数会额外增加一些代码，但是这会使得你的@include更加容易理解。比如，上面那段代码就比下面这段代码更加容易理解，因为上面的代码明确指出了green和#fff分别是什么。
```CSS 
  .button-green {  
    @include button($background: green, $color: #fff);  
  }
```
## 数量可变的参数
Mixins可以接收未知数量的参数。比如你可以给同一个元素增加多种box-shadows。这里，我增加了暗灰和浅灰两种阴影。
```CSS
.container {  
    box-shadow: 0px 1px 2px #333,  
                2px 3px 4px #ccc;  
}
```
在另一个元素上你可能只想使用一种阴影或者在其他元素上你又想使用三种或者四种阴影。这个时候你就可以创建一个接收数量可变的参数的mixin模块，并且在使用@include指令的时候决定传递参数的数量
```CSS
@mixin box-shadows($shadow...) {  
    box-shadow: $shadow;  
}

.container {  
    @include box-shadows(0px 1px 2px #333, 2px 3px 4px #ccc);  
}
```
通过在变量名后增加三个点（...）来使mixin模块接收数量可变的参数。需要注意的是这些是三个周期的字符，而不是单一的省略号。当你使用@include传递参数的时候，使用逗号将参数分开。

之前的代码将被编译为：
```CSS
.container {  
    box-shadow: 0px 1px 2px #333,  
                2px 3px 4px #ccc;  
}
```
你同样可以给mixin传递可变的参数
```CSS
@mixin box-shadows($shadow...) {  
    box-shadow: $shadow;  
}

$shadows: 0px 1px 2px #333, 2px 3px 4px #ccc;

.container {  
    @include box-shadows($shadows...);  
}
```
这里我将变量'$shadows'设置为有两种阴影的list，并在@include中将其作为参数传递。同样，你也可以将参数设置为一个map，并且作为参数传递。你也可以同时传递list和map，只要list作为第一个传递。
```CSS
@include box-shadows($list..., $map...)
```
著作权归作者所有。

商业转载请联系作者获得授权,非商业转载请注明出处。

原文: [https://www.w3cplus.com/preprocessor/sass-the-mixin-directive.html](https://www.w3cplus.com/preprocessor/sass-the-mixin-directive.html)





