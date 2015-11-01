var gulp = require('gulp'),
    react = require('gulp-react'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require("vinyl-source-stream");

gulp.task('convert', function () {
  return gulp.src('src/components/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('src/components/'));
});

gulp.task('browserify', ['convert'], function(){
  var b = browserify();
  b.transform(reactify);
  b.add('src/app.js');

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', function() {
    gulp.start('browserify');
});
