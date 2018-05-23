const gulp  = require('gulp'),
  runSequence = require('run-sequence');

gulp.task("default", function(e) {
  runSequence(
    'build',
    'watch',
    'server',
    e
  )
});