# 如何写一个浏览器插件
## 定义
- 一个 Chrome 扩展其实就是一个配置（入口）文件 manifest.json 和一系列 html、css、js、图片文件的集合。
- 一个用Web技术开发、用来增强浏览器功能的软件，它其实就是一个由HTML、CSS、JS、图片等资源组成的一个.crx后缀的压缩包.
  
![图片](https://raw.githubusercontent.com/dubaohao/image/main/20210803/00001.png)
## 开发
谷歌官方开发文档：https://developer.chrome.com/docs/extensions/mv3/
### 核心入口文件 manifest文件
```
{ 
    // 插件的名称
    "name": "Weather",
    // 插件描述
    "description": "a currently clone",
    // 插件的版本
    "version": "0.1",
    // 会一直常驻的后台JS或后台页面
    "background": {
        // 2种指定方式，如果指定JS，那么会自动生成一个背景页
        "scripts": ["background.js"],
        "persistent": false
    },
    "options_page": "options.html",
    // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
    "browser_action":{
        "default_icon":{
            "19": "images/icon19.png",
            "38": "images/icon38.png"
        },
        "default_title": "stock helper",
        "default_popup": "popup.html"
    },
    {/*
    "page_action": {
        "default_popup": "popup.html",
        "default_icon": {
            "16": "images/get_started16.png",
            "32": "images/get_started32.png",
            "48": "images/get_started48.png",
            "128": "images/get_started128.png"
        }
    },
    */}
    // 权限申请
    "permissions": [
        "contextMenus", // 右键菜单
        "tabs", // 标签
        "notifications", // 通知
        "webRequest", // web请求
        "webRequestBlocking", "storage", // 插件本地存储
        "http://*/*", // 可以通过executeScript或者insertCSS访问的网站
        "https://*/*" // 可以通过executeScript或者insertCSS访问的网站
    ],
    "chrome_url_overrides": {
        "newtab": "tab.html"
    },
    // 图标，一般偷懒全部用一个尺寸的也没问题
    "icons": {
        "16": "images/get_started16.png",
        "32": "images/get_started32.png",
        "48": "images/get_started48.png",
        "128": "images/get_started128.png"
    }
    // 清单文件的版本，这个必须写，而且必须是2
    "manifest_version": 2,
    // 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
    "web_accessible_resources": ["js/inject.js"],
    // 插件主页，这个很重要，不要浪费了这个免费广告位
    "homepage_url": "https://www.baidu.com",
    // 覆盖浏览器默认页面
    "chrome_url_overrides": {
        // 覆盖浏览器默认的新标签页
        "newtab": "newtab.html"
    },
    // Chrome40以前的插件配置页写法
    "options_page": "options.html",
    // Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
    "options_ui": {
        "page": "options.html",
        // 添加一些默认的样式，推荐使用
        "chrome_style": true
    },
    // 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
    "omnibox": { "keyword" : "go" },
    // 默认语言
    "default_locale": "zh_CN",
    // devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
    "devtools_page": "devtools.html"
}
```

## 如何本地调试
- 打开 Chrome 设置-扩展程序（chrome://extensions/）页面，勾选 开发者模式
- 点击 <b>加载正在开发的扩展程序</b> 按钮，选择扩展所在的文件夹，就可以在浏览器工具栏中看到自己写的扩展了。

![图片](https://raw.githubusercontent.com/dubaohao/image/main/20210803/00002.png)