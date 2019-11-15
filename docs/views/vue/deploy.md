---
title: Node+PM2项目部署
date: 2019-11-15
sidebar: 'auto'
tags:
 - Node
categories: 
 - Node
---

:::tip
使用Node+PM2开启服务器,并进行项目管理
::: 

## Node开启服务器
创建Node项目,安装express快速创建WEB服务器,托管静态资源,代码如下
``` js
  /**
  * 初始化npm init -y
  * 安装express npm install express
  * 安装compression npm install compression  gzip压缩减小文件体积,使传输更快
  */
  const express = require('express')
  const compression = require('compression')
  const app = express()
  // 一定要把这一行代码，写到 静态资源托管之前
  app.use(compression())
  app.use(express.static('./dist'))
  app.listen(8020,()=>{
    console.log('13246')
  })

```
## 开启HTTPS服务
配置HTTPS服务
```js
const express = require('express')
const compression = require('compression')
const https = require('https')
const fs = require('fs')
const app = express()

//申请得到的cert和key文件
const options = {
  cert: fs.readFileSync('./full_chain.pem'),
  key: fs.readFileSync('./private.key')
}

// 一定要把这一行代码，写到 静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))

https.createServer(opctions,app).listen(443);
```

## 使用PM2管理项目
```html
1、 pm2需要全局安装
npm install -g pm2
2、进入项目根目录
2.1 启动进程/应用  pm2 start bin/www 或 pm2 start app.js

2.2 重命名进程/应用  pm2 start app.js --name wb123

2.3 添加进程/应用 watch  pm2 start bin/www --watch

2.4 结束进程/应用  pm2 stop www

2.5 结束所有进程/应用  pm2 stop all

2.6 删除进程/应用  pm2 delete www

2.7 删除所有进程/应用  pm2 delete all

2.8 列出所有进程/应用  pm2 list

2.9 查看某个进程/应用具体情况  pm2 describe www

2.10 查看进程/应用的资源消耗情况  pm2 monit

2.11 查看pm2的日志  pm2 logs

2.12 若要查看某个进程/应用的日志,使用  pm2 logs www

2.13 重新启动进程/应用  pm2 restart www

2.14 重新启动所有进程/应用  pm2 restart all
```