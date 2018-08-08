# MelonGrid.css

> 一个简单小巧的栅格化布局 CSS 框架，参考 [Bootstrap](https://github.com/twbs/bootstrap)

min.gz: 1.94kb



## 特点

1. 🦄 支持栅格布局
2. 🌈 支持响应式布局
3. 🎨 支持 Gutter、Nestable、Offset、Order、Align
4. 👀 支持用户自定义相关配置




## 自定义

`git clone` 仓库后，修改 `src/melonGrid.styl` 文件，修改用户自定义参数部分

```stylus
$colnums = 12                 // columns number
$gutter = 15px                // columns gutter

$sm = 576px                   // media breakpoint
$md = 768px
$lg = 992px
$xl = 1200px

$smw = 540px                  // container width
$mdw = 720px
$lgw = 960px
$xlw = 1140px

$sizes = sm md lg xl          // className eg: .col-sm-1 .col-md-1
```

接下来 `npm install` 安装项目依赖，执行 `npm run build` 打包自定义的样式文件到 `build/`



## LICENSE
[MIT]()
Copyright (c) 2018 BrezyMelon
