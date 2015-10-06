var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var path = require('path');

var source = {
  markup: [
    'public/**/*.html'
  ],
  styles: [
    'public/stylesheets/**/*.less'
  ],
  scripts: [
    'public/scripts/**/*.js'
  ],
  test: [
    'test/**/*.js'
  ]
};

var destination = {
  style: 'public/static',
  script: 'public/static'
};

gulp.task('less', function() {
  return gulp.src(source.styles)
    .pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(gulp.dest(destination.style));
});

gulp.task('scripts', function() {
  return gulp.src(source.scripts)
    .pipe(browserify({insertGlobals: true, debug: true,}))
    .pipe(gulp.dest(destination.script))
});


gulp.task('default', ['less', 'scripts']); //development