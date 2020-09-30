(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(t,e,s){"use strict";s.r(e);var v=s(42),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"贡献准则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贡献准则"}},[t._v("#")]),t._v(" 贡献准则 ")]),t._v(" "),s("div",{staticStyle:{color:"#73c8ff","font-size":"36px"},attrs:{align:"center"}},[s("a",{attrs:{title:"Go to homepage",href:"https://github.com/liuyib/hexo-theme-stun"}},[s("img",{attrs:{align:"center",width:"60",height:"60",src:"https://raw.githubusercontent.com/liuyib/hexo-theme-stun/master/source/images/icons/stun-logo.svg?sanitize=true"}})]),t._v(" t u n")]),t._v(" "),s("p",[t._v("嗨！我很高兴您有兴趣为 «Stun» 做贡献。在进行贡献之前，请务必花一些时间通读以下准则：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#pull-request-%e5%87%86%e5%88%99"}},[t._v("Pull request 准则")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%bc%80%e5%8f%91%e4%b9%8b%e5%89%8d%e7%9a%84%e5%87%86%e5%a4%87"}},[t._v("开发之前的准备")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e6%8f%90%e4%ba%a4%e4%bf%a1%e6%81%af%e8%a7%84%e8%8c%83"}},[t._v("提交信息规范")])])]),t._v(" "),s("h2",{attrs:{id:"pull-request-准则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pull-request-准则"}},[t._v("#")]),t._v(" Pull request 准则")]),t._v(" "),s("p",[t._v("要知道，"),s("code",[t._v("master")]),t._v(" 分支只是最新稳定版本的一个快照。所有的开发都应该在专门的分支中进行，"),s("strong",[t._v("不要向 "),s("code",[t._v("master")]),t._v(" 分支提交 PRs")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("将仓库 fork 到你的 Github，并 clone 到本地")]),t._v(" "),s("li",[t._v("切换到"),s("strong",[t._v("新分支")]),t._v("（例如 "),s("code",[t._v("patch-1")]),t._v("）上开发")]),t._v(" "),s("li",[t._v("将本地修改进行提交（如果你修改了源代码，请执行 "),s("code",[t._v("npm run lint:fix")]),t._v("）")]),t._v(" "),s("li",[t._v("将提交 push 到 fork 的仓库下")]),t._v(" "),s("li",[t._v("创建一个 Pull request 到 Stun 主题仓库的 "),s("strong",[t._v("dev 分支")])])]),t._v(" "),s("h2",{attrs:{id:"开发之前的准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发之前的准备"}},[t._v("#")]),t._v(" 开发之前的准备")]),t._v(" "),s("p",[t._v("你需要安装 "),s("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("在 clone 该仓库后，执行:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h2",{attrs:{id:"提交信息规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交信息规范"}},[t._v("#")]),t._v(" 提交信息规范")]),t._v(" "),s("p",[t._v("我们对项目的 git 提交信息格式进行统一格式约定，每条提交信息由 "),s("code",[t._v("type")]),t._v(" + "),s("code",[t._v("subject")]),t._v(" 组成，这将提升项目日志的可读性。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("type")]),t._v(" 用于描述此次提交信息的意义，全小写，仅包括如下类型：\n"),s("ul",[s("li",[s("code",[t._v("feat")]),t._v("：新功能")]),t._v(" "),s("li",[s("code",[t._v("fix")]),t._v("：Bug 修复")]),t._v(" "),s("li",[s("code",[t._v("refactor")]),t._v("：重构（既不是新增功能，也不是修改 Bug 的代码变动）")]),t._v(" "),s("li",[s("code",[t._v("docs")]),t._v("：文档变化")]),t._v(" "),s("li",[s("code",[t._v("style")]),t._v("：代码格式变化（空格、缩进、换行、分号等）")]),t._v(" "),s("li",[s("code",[t._v("test")]),t._v("：代码测试相关")]),t._v(" "),s("li",[s("code",[t._v("chore")]),t._v("：基础构建工具或依赖库的变化（不涉及源码）")]),t._v(" "),s("li",[s("code",[t._v("revert")]),t._v("：代码回滚（回退已经存在的 "),s("code",[t._v("commit")]),t._v("）")])])]),t._v(" "),s("li",[s("code",[t._v("subject")]),t._v(" 用于简要描述修改变更的内容，如 "),s("code",[t._v("Update quick start in readme.md")]),t._v(" "),s("ul",[s("li",[t._v("句尾不要使用符号")]),t._v(" "),s("li",[t._v("使用现在时、祈使句语气")])])])]),t._v(" "),s("h2",{attrs:{id:"贡献人员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贡献人员"}},[t._v("#")]),t._v(" 贡献人员")]),t._v(" "),s("p",[t._v("感谢所有为 «Stun» 做出贡献的人！")]),t._v(" "),s("a",{attrs:{href:"https://github.com/liuyib/hexo-theme-stun/graphs/contributors"}},[s("img",{attrs:{src:"https://opencollective.com/hexo-theme-stun/contributors.svg?width=980"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);