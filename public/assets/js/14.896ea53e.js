(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{353:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[e._v("Git使用中遇到的一些问题记录")])]),e._v(" "),s("h2",{attrs:{id:"拉取项目时出错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取项目时出错","aria-hidden":"true"}},[e._v("#")]),e._v(" 拉取项目时出错")]),e._v(" "),s("p",[e._v("在拉取远程仓库上的项目时出现了以下问题")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" * branch            master     -> FETCH_HEAD\nfatal: refusing to merge unrelated histories\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("blockquote",[s("p",[e._v("NOTE:首先需要pull，发现refusing to merge unrelated histories，因为两个仓库提交历史不一致，无法pull拉取远程信息，所以需要在GIT命令中添加一句代码：--allow-unrelated-histories允许不相关历史进行提交,代码是在git 2.9.2版本发生的，最新的版本需要添加--allow-unrelated-histories (eg:git pull origin master --allow-unrelated-histories)")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git checkout master # 切换到要提交代码的分支\ngit pull origin master --allow-unrelated-histories # 加上后面这个选项允许不相关历史提交\ngit push origin master # 提交到远程分支\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])},[],!1,null,null,null);t.default=r.exports}}]);