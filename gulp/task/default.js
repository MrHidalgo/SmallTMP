const gulp  = require('gulp'),
  runSequence = require('run-sequence');

gulp.task("default", function(callback) {
  runSequence(
    ['build'],
    'watch',
    'server',
    callback
  )
});