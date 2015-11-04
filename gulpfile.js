var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var path = require('path');

var source = {
  markup: [
    'public/**/*.html'
  ],
  less: [
    'public/stylesheets/less/styles.less'
  ],
  sass: [
    'public/stylesheets/sass/styles.scss'
  ],

  style: [
    'public/stylesheets/styles.css'
  ],

  compiledStyle: [
    'public/static/less.css',
    'public/static/sass.css'
  ],

  script: [
    'public/scripts/application.js'
  ],

  compiledScript: [
    'public/static/application.js'
  ],

  fonts: [
    'public/fonts/**/*',
    'node_modules/bootstrap/fonts/*',
    'node_modules/font-awesome/fonts/*',
    'node_modules/slick-carousel/slick/fonts/*',
    'node_modules/photoswipe/src/css/default-skin/**/*.+(svg|gif)'
  ],

  images: [
    'public/images/**/*'
  ],

  test: [
    'test/**/*.js'
  ]
};

var destination = {
  style: 'public/static',
  less: 'public/static/',
  sass: 'public/static/',
  script: 'public/static',
  fonts: 'public/static/fonts',
  images: 'public/static/images'
};

gulp.task('less', function() {
  return gulp.src(source.less)
    .pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(concat('less.css'))
    .pipe(gulp.dest(destination.style));
});

gulp.task('sass', function() {
  return gulp.src(source.sass)
    .pipe(sass())
    .pipe(concat('sass.css'))
    .pipe(gulp.dest(destination.style));
});

gulp.task('css', ['less', 'sass'], function() {
  return gulp.src(source.compiledStyle)
    .pipe(concat("styles.css"))
    .pipe(gulp.dest(destination.style));
});

gulp.task('minify-css', ['css'], function() {
  return gulp.src(source.compiledStyle)
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(destination.style));
});

gulp.task('scripts', function() {
  return gulp.src(source.script)
    .pipe(browserify({insertGlobals: true}))
    .pipe(gulp.dest(destination.script))
});

gulp.task('minify-js', ['scripts'], function() {
  return gulp.src(source.compiledScript)
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(destination.script))
});

gulp.task('fonts', function() {
  return gulp.src(source.fonts)
    .pipe(gulp.dest(destination.fonts));
});

gulp.task('images', function() {
  return gulp.src(source.images)
    .pipe(gulp.dest(destination.images));
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheets/**/*', ['css']);
  gulp.watch('public/scripts/**/*.js', ['scripts']);
});

gulp.task('default', ['fonts', 'images', 'css', 'scripts', 'watch']); //development
gulp.task('build', ['fonts', 'images', 'minify-css', 'minify-js']); //production