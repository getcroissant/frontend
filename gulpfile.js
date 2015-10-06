var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var source = {
  markup: [
    'public/**/*.html'
  ],
  styles: [
    'public/css/**/*.less'
  ],
  scripts: [
    'public/js/**/*.js'
  ],
  test: [
    'test/**/*.js'
  ]
};

var destination = {
  style: 'public/css',
  script: 'public/js'
};

gulp.task('less', function() {
  return gulp.src(source.styles)
    .pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(gulp.dest(destination.style));
});


gulp.task('default', ['less']); //development