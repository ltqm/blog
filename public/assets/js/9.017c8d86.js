(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{345:function(s,t,a){s.exports=a.p+"assets/img/SSH.28b7df0b.png"},358:function(s,t,a){"use strict";a.r(t);var e=a(0),i=Object(e.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",[s._v("Git是一个 “分布式版本管理工具”，简单的理解版本管理工具：大家在写东西的时候都用过 “回撤” 这个功能，但是回撤只能回撤几步，假如想要找回我三天之前的修改，光用 “回撤” 是找不回来的。而 “版本管理工具” 能记录每次的修改，只要提交到版本仓库，你就可以找到之前任何时刻的状态（文本状态）。")])]),s._v(" "),e("h2",{attrs:{id:"安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),e("h3",{attrs:{id:"初始配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始配置")]),s._v(" "),e("p",[s._v("配置文件为 ~/.gitconfig ，执行任何Git配置命令后文件将自动创建。")]),s._v(" "),e("p",[s._v("第一个要配置的是你个人的用户名称和电子邮件地址。这两条配置很重要，每次 Git 提交时都会引用这两条信息，说明是谁提交了更新，所以会随更新内容一起被永久纳入历史记录：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18059040043@139.com"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18059040043@139.com"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("ol",[e("li",[s._v("初始化新仓库 git init")]),s._v(" "),e("li",[s._v("克隆旧仓库 git clone https://github.com/xxxx/xxx.git")]),s._v(" "),e("li",[s._v("查看状态 git status")]),s._v(" "),e("li",[s._v("提交单个文件 git add index.html")]),s._v(" "),e("li",[s._v("提交所有文件 git add .")]),s._v(" "),e("li",[s._v("使用通配符提交 git add *.js")]),s._v(" "),e("li",[s._v("提交到仓库中 git commit -m '提示信息'")]),s._v(" "),e("li",[s._v("删除版本库与项目目录中的文件 git rm index.php")]),s._v(" "),e("li",[s._v("拉取origin主机的xxx分支与当前分支合并 git pull origin xxx")]),s._v(" "),e("li",[s._v("推送到远程主机的xxx分支 git push origin xxx")])]),s._v(" "),e("h3",{attrs:{id:"gitignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore","aria-hidden":"true"}},[s._v("#")]),s._v(" .gitignore")]),s._v(" "),e("p",[s._v(".gitignore用于定义忽略提交的文件")]),s._v(" "),e("ul",[e("li",[s._v("所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略")]),s._v(" "),e("li",[s._v("匹配模式最后跟反斜杠（/）说明要忽略的是目录。")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("idea\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vendor\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("storage\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"branch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#branch","aria-hidden":"true"}},[s._v("#")]),s._v(" Branch")]),s._v(" "),e("p",[s._v("分支功能主要用于增加新功能与处理BUG时使用，便于管理")]),s._v(" "),e("ol",[e("li",[s._v("创建分支 git branch develop")]),s._v(" "),e("li",[s._v("查看分支 git branch")]),s._v(" "),e("li",[s._v("切换分支 git checkout develop")]),s._v(" "),e("li",[s._v("创建并切换分支 git checkout -b develop")]),s._v(" "),e("li",[s._v("合并分支 develop 到 master")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git checkout master\ngit merge develop\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("删除分支 git branch -d develop")]),s._v(" "),e("li",[s._v("删除没有合并的分支 git branch -D develop")]),s._v(" "),e("li",[s._v("删除远程分支 git push origin :devlop")]),s._v(" "),e("li",[s._v("查看未合并的分支(切换到master) git branch --no-merged")]),s._v(" "),e("li",[s._v("查看已经合并的分支(切换到master) git branch --merged")])]),s._v(" "),e("h3",{attrs:{id:"冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冲突解决","aria-hidden":"true"}},[s._v("#")]),s._v(" 冲突解决")]),s._v(" "),e("p",[s._v("协同开发是多个开发人员同时更改同一分支文件都可能造成冲突,造成无法提交代码。")]),s._v(" "),e("ol",[e("li",[s._v("使用编辑器解决冲突文件")]),s._v(" "),e("li",[s._v("添加暂存 git add . 表示解决冲突")]),s._v(" "),e("li",[s._v("git commit '解决冲突'  提交完成")])]),s._v(" "),e("h2",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" 远程仓库")]),s._v(" "),e("h3",{attrs:{id:"ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh","aria-hidden":"true"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),e("p",[e("strong",[s._v("生成秘钥")]),s._v("\n使用ssh连接Github发送指令更加安全可靠，也可以免掉每次输入密码的困扰。\n在命令行中输入以下代码（windows用户使用 Git Bash）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh-keygen -t rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("一直按回车键直到结束。系统会在~/.ssh 目录中生成 id_rsa和id_rsa.pub，即密钥id_rsa和公钥id_rsa.pub")]),s._v(" "),e("p",[e("strong",[s._v("向github添加秘钥")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(345),alt:"avatar"}})]),s._v(" "),e("p",[s._v("点击 New SSH key 按钮，添加上面生成的 id_rsa.pub 公钥内容。")]),s._v(" "),e("h3",{attrs:{id:"关联远程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联远程","aria-hidden":"true"}},[s._v("#")]),s._v(" 关联远程")]),s._v(" "),e("ol",[e("li",[s._v("创建本地库并完成初始化")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('echo "# hd-xj" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("添加远程仓库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote add origin https://github.com/ltqm/Admin.git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("查看远程残酷")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" git remote -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("拉取远程数据")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git pull origin develop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("推送数据到远程仓库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push origin develop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("删除远程仓库关联")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote rm origin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("通过clone的仓库,本地与远程都已经关联上,以上步骤可以省略")])]),s._v(" "),e("h3",{attrs:{id:"pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pull","aria-hidden":"true"}},[s._v("#")]),s._v(" Pull")]),s._v(" "),e("p",[s._v("拉取远程主机某个分支的更新，再与本地的指定分支合并。")]),s._v(" "),e("ol",[e("li",[s._v("拉取origin主机的develop分支与当前分支合并 git pull origin develop")])]),s._v(" "),e("blockquote",[e("p",[s._v("如果存在冲突 处理网冲突后提交")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("如果远程分支与当前本地分支同名直接执行 git pull")])]),s._v(" "),e("h3",{attrs:{id:"push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[s._v("#")]),s._v(" Push")]),s._v(" "),e("p",[s._v("git push命令用于将本地分支的更新，推送到远程主机。它的格式与git pull命令相似")]),s._v(" "),e("ol",[e("li",[s._v("将当前分支推送到origin主机的对应分支(如果当前分支只有一个追踪分支 ，可省略主机名)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push origin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("使用-u选项指定一个默认主机 ,这样以后就可以不加任何参数直播使用git push。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push -u origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("删除远程develop分支 git push origin --delete develop")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push origin --delete develop\n```\n\n\n\n### Clone\n```\n<--克隆默认分支--\x3e\ngit clone  https://github.com/ltqm/Admin.git\n<--克隆指定分支--\x3e\ngit clone -b develop  https://github.com/ltqm/Admin.git\n```\n\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])])},[],!1,null,null,null);t.default=i.exports}}]);