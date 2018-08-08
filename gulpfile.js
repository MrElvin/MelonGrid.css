const gulp = require('gulp')
const stylus = require('gulp-stylus')
const minify = require('gulp-minify-css')
const rename = require('gulp-rename')
const gzip = require('gulp-gzip')
const browserSync = require('browser-sync').create()
const { reload } = browserSync

gulp.task('styles', () => {
  return gulp.src('./src/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./styles'))
    .pipe(reload({ stream: true }))
})

gulp.task('serve', ['styles'], () => {
  browserSync.init({
    notify: false,
    port: 9999,
    host: 'localhost',
    server: {
      baseDir: './',
    }
  })

  gulp.watch('src/*.styl', ['styles'])
  gulp.watch('index.html').on('change', reload)
})

gulp.task('build', () => {
  gulp.src('./src/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build'))
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build'))
    .pipe(gzip())
    .pipe(gulp.dest('./build'))
})

gulp.task('default', ['serve'])
