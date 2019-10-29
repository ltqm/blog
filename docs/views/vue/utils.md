---
title: Vue.js 中的实用工具方法
date: 2019-10-19
sidebar: 'auto'
tags:
 - vue
 - utils
categories: 
 - vue
---

:::tip
日常开发中常用到的一些工具方法, 包含 vue 的公用过滤器、公用指令等
::: 

<!-- more -->
## 公用自定义过滤器
```js
import Vue from 'vue'
import moment from 'moment'

/**
 * @filter dateFormat 时间格式化
 * @param {String, Date} value 可被 new Date 解析的字符串
 * @param {String} formatStr moment 的 format 字符串
 * 使用方法 {{ 2019-1-1 | dateFormat() }}
 */
Vue.filter('dateFormat', (value, formatStr) => {
    return moment(value).format(formatStr || 'YYYY年MM月DD日 hh:mm:ss')
})

/**
 * @filter digitUppercase 人民币金额转成汉字大写
 * @param {Number} value 金额数字
 * 使用方法 {{ 1111 | digitUppercase }}
 */
Vue.filter('digitUppercase', (value) => {
    if (Number(value)) {
        let fraction = ['角', '分']
        let digit = [
            '零', '壹', '贰', '叁', '肆',
            '伍', '陆', '柒', '捌', '玖'
        ]
        let unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ]

        let head = value < 0 ? '欠' : ''
        value = Math.abs(value)
        let s = ''
        for (let i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(value * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
        }
        s = s || '整'
        value = Math.floor(value)
        for (let i = 0; i < unit[0].length && value > 0; i++) {
            let p = ''
            for (let j = 0; j < unit[1].length && value > 0; j++) {
                p = digit[value % 10] + unit[1][j] + p
                value = Math.floor(value / 10)
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
        }
        return head + s.replace(/(零.)*零元/, '元')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零元整')
    } else {
        return '零元整'
    }
})
```

## 公用自定指令
```js
import Vue from 'vue'

/**
 * @directive preventReClick 防止按钮在短时间内多次点击造成的多次请求(一般用于提交按钮)
 * @param {Element} el 绑定的元素
 * @param {Number} binding 绑定的时间
 * 使用方式 <el-button v-prevent-replace-click></el-button>
 */
Vue.directive('preventReplaceClick', {
    inserted(el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.classList.add('is-disabled')
                const i = document.createElement('i')
                i.classList.add('el-icon-loading')
                el.prepend(i)
                el.classList.add('is-loading')
                el.disabled = true

                setTimeout(() => {
                    el.disabled = false
                    el.classList.remove('is-disabled')
                    el.classList.remove('is-loading')
                    el.removeChild(i)
                }, binding.value || 1000)
            }
        })
    }
})

/**
 * @directive copy 复制内容
 * @param {Element} el 绑定的元素
 * @param {Number} binding 绑定的复制内容
 * 使用方式 <el-button type="text" v-copy="123456">复制</el-button>
 */
Vue.directive('copy', {
  bind (el, binding) {
    // 注册事件
    el.addEventListener('click', () => {
      const value = binding.value
      // 必须传值
      if (!value) {
        Message.error('请输入要复制问的文本')
      }
      // chrome version 66+ support
      if (isSupportChromeVersion(66) && window.navigator.clipboard) {
        //window.navigator.clipboard.writeText(value) https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/writeText
        window.navigator.clipboard.writeText(value).then(() => {
          Message.success('复制成功啦, 赶快使用吧')
        }).catch((error) => {
          Message.error(error)
        })
      } else {
        copyTarget.value = value
        copyTarget.select()
        document.execCommand('Copy')
        Message.success('复制成功啦, 赶快使用吧')
      }
    })
  }
})
```

## 节流和防抖
```js
/**
 * 应用场景
 * debounce(抖动)
 * search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
 * window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
 *
 * throttle(节流)
 * 鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
 */

// 防抖
export function debounce(fn, delay = 200) {
    let timer
    return function() {
        let th = this
        let args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            timer = null
            fn.apply(th, args)
        }, delay)
    }
}
// 节流
export function throttle(fn, interval = 200) {
    let last
    let timer
    return function() {
        let th = this
        let args = arguments
        let now = +new Date()
        if (last && now - last < interval) {
            clearTimeout(timer)
            timer = setTimeout(function() {
                last = now
                fn.apply(th, args)
            }, interval)
        } else {
            last = now
            fn.apply(th, args)
        }
    }
}

```