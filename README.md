# MelonGrid.css

> A simple responsive css framework, learn from [Bootstrap](https://github.com/twbs/bootstrap)

min.gz: 1.94kb

## Doc

[MelonGrid.css](https://www.breezymelon.com/MelonGrid.css/)

## Features

1. 🦄 Grid Layout
2. 🌈 Responsive Grid Layout
3. 🎨 Support Gutter、Nesting、Offset、Order、Align
4. 👀 Support Customization

## Installation

### Using npm

```
npm install melongrid.css
```

Import `melongrid.css` into your project

```JavaScript
import 'melongrid.css'
```

### Using cdn

Add link into your `.html` file

```html
<link rel="stylesheet" href="https://unpkg.com/melody.css">
```

## Customize

`git clone` the repository, modify `src/melonGrid.styl` file, customize the variable setting part

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

`npm install` install project devDependencies, run `npm run build` pack your own **MelonGrid.css** in `build/`

## LICENSE

[MIT](https://github.com/MrElvin/MelonGrid.css/blob/master/LICENSE)

Copyright (c) 2018 BrezyMelon
