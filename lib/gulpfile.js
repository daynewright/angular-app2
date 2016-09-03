
const gulp = require('gulp'),
      connect = require('gulp-connect'),
      jshint = require('gulp-jshint');

//jshint all js files
gulp.task('jshint', () =>
  gulp.src(['../app/**/*.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish', {beep: true}))
);

//connect server
gulp.task('server', () =>
  connect.server({
    port: 8080,
    root: '../../angular-mushroom',
    livereload: true
  })
);

gulp.task('watch', () =>
  gulp.watch('../app/**/*.js', ['jshint'])
);

gulp.task('default', ['watch', 'server', 'jshint']);
