
const gulp = require('gulp'),
      connect = require('gulp-connect'),
      jshint = require('gulp-jshint');


// ERROR CALLBACK //
 const errorLog = (error) => {
  console.log(error.message);
  this.emit('end');
};

//jshint all js files
gulp.task('jshint', () =>
  gulp.src(['../app/**/*.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
);

//connect server
gulp.task('server', () =>
  connect.server({
    port: 8080,
    livereload: true
  })
);

gulp.task('default', ['jshint', 'server']);
