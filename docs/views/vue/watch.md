---
title: vue 中 watch 的详细用法
date: 2019-10-17
sidebar: 'auto'
tags:
 - vue
categories: 
 - vue
---



## API
:::tip
[watch](https://cn.vuejs.org/v2/api/#watch)
:::
:::tip
[原文链接](https://www.cnblogs.com/xiaozhumaopao/p/11077234.html)
:::

## 简单用法
 ``` html
<script>
  export default {
  name: '',
  data () {
    return {
      cityName: 'shanghai'
    }
  },
  watch: {
    cityName(newName, oldName) {
      // ...
    }
  }
}
</script>
 ```

 或者

 ```html
 <script>
    export default {
        data() {
            return {
                cityName: 'shanghai'
            }
        },
        watch: {
            cityName: 'nameChange'
        },
        methods: {
            nameChange(newName, oldName) {
                // ...
            }
        }
    }
</script>
 ```

## immediate和handler

这样使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。

比如当父组件向子组件动态传值时，子组件props首次获取到父组件传来的默认值时，也需要执行函数，此时就需要将immediate设为true。

```html
  <script>
    export default {
      data () {
        return {
          cityName: ''
        }
      },
      watch: {
        cityName: {
        　　handler(newName, oldName) {
          　　// ...
        　　},
        　　immediate: true
        }
      }
    }
  </script>
```

监听的数据后面写成对象形式，包含handler方法和immediate，之前我们写的函数其实就是在写这个handler方法；

immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler

## deep

当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。

```html
  <script>
    export default {
      data () {
        return {
          cityName: {id: 1, name: 'shanghai'}
        }
      },
      watch: {
        cityName: {
        　　handler(newName, oldName) {
          　　// ...
        　　},
            deep: true,
        　　immediate: true
        }
      }
    }
  </script>
```

设置deep: true 则可以监听到cityName.name的变化，此时会给cityName的所有属性都加上这个监听器，当对象属性较多时，每个属性值的变化都会执行handler。如果只需要监听对象中的一个属性值，则可以做以下优化：使用字符串的形式监听对象属性

```html
  <script>
    export default {
      data () {
        return {
          cityName: {id: 1, name: 'shanghai'}
        }
      },
      watch: {
        'cityName:name': {
        　　handler(newName, oldName) {
          　　// ...
        　　},
            deep: true,
        　　immediate: true
        }
      }
    }
  </script>
```

这样只会给对象的某个特定的属性加监听器。

数组（一维、多维）的变化不需要通过深度监听，对象数组中对象的属性变化则需要deep深度监听。

## 注销watch
为什么要注销 watch？因为我们的组件是经常要被销毁的，比如我们跳一个路由，从一个页面跳到另外一个页面，那么原来的页面的 watch 其实就没用了，这时候我们应该注销掉原来页面的 watch 的，不然的话可能会导致内置溢出。好在我们平时 watch 都是写在组件的选项中的，他会随着组件的销毁而销毁。但是，如果我们使用下面这样的方式写 watch，那么就要手动注销了，这种注销其实也很简单

```javascript
const unWatch = app.$watch('text', (newVal, oldVal) => {
  console.log(`${newVal} : ${oldVal}`);
})

unWatch(); // 手动注销watch

```
app.$watch调用后会返回一个值，就是unWatch方法，你要注销 watch 只要调用unWatch方法就可以了
