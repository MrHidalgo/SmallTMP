const gulp  = require('gulp'),
  runSequence = require('run-sequence');

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