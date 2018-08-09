#! /usr/bin/env node
const marked = require('marked')
const fs = require('fs')

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight (code) {
    return require('highlightjs').highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

const data = fs.readFileSync(__dirname + '/doc/doc.md').toString()
const convert = marked(data)
fs.writeFileSync(__dirname + '/doc/gen.html', convert)
