var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('compile-less', function(){
  gulp.src('./assets/stylesheets/*.less')
  .pipe(less())
  .pipe(gulp.dest('assets/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/stylesheets/*.less', ['compile-less']);
})

gulp.task('default', ['less']);
