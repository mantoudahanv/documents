(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{378:function(t,a,r){"use strict";r.r(a);var e=r(24),n=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"起因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#起因","aria-hidden":"true"}},[t._v("#")]),t._v(" 起因")]),t._v(" "),r("p",[t._v("由于钉钉、Tim 及 360浏览器的不支持，wine 已经无法支撑日常工作了，所以就需要一个虚拟机来提供日常的服务了。")]),t._v(" "),r("p",[t._v("选择了对配置要求较低的 win7。")]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("关于安装可"),r("router-link",{attrs:{to:"/os/manjaro/most-used-softwares.html#virtualbox"}},[t._v("参考")]),t._v("。")],1),t._v(" "),r("p",[t._v("不过存在的问题是无法使用增强功能（剪切板、拖拽、共享文件夹）。")]),t._v(" "),r("p",[t._v("在搜寻方案的途中寻找了很多解决办法并一一尝试，所以导致尚不清楚解决问题的真正方案。")]),t._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",[r("a",{attrs:{href:"https://blog.myhappydata.com/linux/manjaro/2018/05/15/how-to-install-and-setup-virtualbox-on-manjaro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. how to install and setup Virtualbox on Manjaro"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("该部分主要是补齐一些依赖。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://wiki.manjaro.org/index.php/Pamac",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. Installing Pamac"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("该部分主要是安装 pamac，为下一部分服务。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://forum.manjaro.org/t/network-fails-in-virtualbox/86309",target:"_blank",rel:"noopener noreferrer"}},[t._v("3. Network fails in VirtualBox"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("该部分猜测是安装好了需要的增强镜像。")])]),t._v(" "),r("h2",{attrs:{id:"尝试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尝试","aria-hidden":"true"}},[t._v("#")]),t._v(" 尝试")]),t._v(" "),r("h3",{attrs:{id:"_1-初试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-初试","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 初试")]),t._v(" "),r("p",[t._v("初步测试时，偶然的共享剪切板成功了，但是其余部分依然失败了。")]),t._v(" "),r("p",[t._v("多次重启后偶有复现剪切板成功，于是就猜测是否是 win7 进程存在问题，重启该部分进程成功启用剪切板，猜测正确，但依然无法做到拖拽和共享文件夹。")]),t._v(" "),r("h3",{attrs:{id:"_2-解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 解决")]),t._v(" "),r("p",[t._v("后面突然想到其实最主要的是安装增强工具。")]),t._v(" "),r("p",[t._v("之前安装时总是提示安装失败，存在异常，这一次在之前的配置后安装成功，唯一需要注意的是需要新建一个存储，用于挂载 "),r("code",[t._v("VBoxGuestAdditions.iso")]),t._v(" 文件。")]),t._v(" "),r("p",[t._v("挂载成功后开机，即可在我的电脑中找到挂载的镜像，找到 win7 的执行文件（存在其余系统的执行脚本），安装重启后即可使用剪切板、拖拽、共享文件夹功能。")])])},[],!1,null,null,null);a.default=n.exports}}]);