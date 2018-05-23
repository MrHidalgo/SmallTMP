const gulp  = require('gulp'),
  del = require('del');

const config = require('../config/config');

gulp.task('clean', function() {
  return del.sync([
    config.dest.root + '/**/*',
    config.src.root + '/img/**',
    '!' + config.dest.root + '/img',
    '!' + config.dest.root + '/img/**/*',
    '!' + config.src.root + '/img'
  ]);
});