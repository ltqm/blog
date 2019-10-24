---
title: GIT的一些问题
date: 2019-10-20
sidebar: 'auto'
tags:
 - GIT
 - issue
categories: 
 - GIT
---

:::tip
Git使用中遇到的一些问题记录
::: 

## 拉取项目时出错

在拉取远程仓库上的项目时出现了以下问题
```
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories
```
>NOTE:首先需要pull，发现refusing to merge unrelated histories，因为两个仓库提交历史不一致，无法pull拉取远程信息，所以需要在GIT命令中添加一句代码：--allow-unrelated-histories允许不相关历史进行提交,代码是在git 2.9.2版本发生的，最新的版本需要添加--allow-unrelated-histories (eg:git pull origin master --allow-unrelated-histories)
```
git checkout master # 切换到要提交代码的分支
git pull origin master --allow-unrelated-histories # 加上后面这个选项允许不相关历史提交
git push origin master # 提交到远程分支
```
