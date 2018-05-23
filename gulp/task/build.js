const gulp  = require('gulp'),
  runSequence = require('run-sequence');

const config = require('../config/config');

gulp.task("build", function(e) {
  runSequence(
    'scss',
    'pug',
    'js',
    'img',
    'fonts',
    'spritePNG',
    'spriteSVG',
    'vendorScript',
    'vendorStyle',
    e
  );
});