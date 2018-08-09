# MelonGrid.css

> A simple responsive css framework, learn from [Bootstrap](https://github.com/twbs/bootstrap)

min.gz: 1.94kb

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

## Document

Default responsive layout breakpoints are the same as [Bootstrap](https://github.com/twbs/bootstrap)

| &nbsp;              | Extra small < 576px | Small ≥ 576px  | Medium ≥ 768px  | Large ≥ 992px  | Extra Large ≥ 1200px  |
| ------------------- | ------------------- | -------------- | --------------- | -------------- | --------------------- |
| Max container width |         auto        |      540px     |      720px      |       960px    |         1140px        |
| Class prefix        |        `.col-`      |    `.col-sm-`  |    `.col-md-`   |    `.col-lg-`  |      `.col-xl-`       |
| # of columns        |         12          |       12       |        12       |       12       |           12          |
| Gutter width        |        30px         |      30px      |       30px      |      30px      |          30px         |

## Examples

### 1. Grid Layout

```html
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

### 2. Responsive Grid Layout

```html
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
```

### 3. Nesting

```html
<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">
        Level 2: .col-8 .col-sm-6
      </div>
      <div class="col-4 col-sm-6">
        Level 2: .col-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
```

### 4. Offset

```html
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
```

### 5. Order

```html
<div class="container">
  <div class="row">
    <div class="col">
      First, but unordered
    </div>
    <div class="col order-12">
      Second, but last
    </div>
    <div class="col order-1">
      Third, but first
    </div>
  </div>
</div>
```

### 6. Align

#### Vertical Alignment

```html
<div class="container">
  <div class="row align-items-start">
    <div class="col-4">
      One of three columns
    </div>
    <div class="col-4">
      One of three columns
    </div>
    <div class="col-4">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-4">
      One of three columns
    </div>
    <div class="col-4">
      One of three columns
    </div>
    <div class="col-4">
      One of three columns
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col-4">
      One of three columns
    </div>
    <div class="col-4">
      One of three columns
    </div>
    <div class="col-4">
      One of three columns
    </div>
  </div>
</div>
```

```html
<div class="container">
  <div class="row">
    <div class="col-4 align-self-start">
      One of three columns
    </div>
    <div class="col-4 align-self-center">
      One of three columns
    </div>
    <div class="col-4 align-self-end">
      One of three columns
    </div>
  </div>
</div>
```

#### Horizontal Alignment

```html
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
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
