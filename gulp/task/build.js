const gulp  = require('gulp'),
  runSequence = require('run-sequence');

gulp.task("build", function(e) {
  runSequence(
    'clean',
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