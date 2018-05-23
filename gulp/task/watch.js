const gulp  = require('gulp'),
  runSequence = require('run-sequence');

gulp.task("watch", function(e) {
  runSequence(
    'scss:watch',
    'pug:watch',
    'js:watch',
    'img:watch',
    'fonts:watch',
    'spritePNG:watch',
    'spriteSVG:watch',
    'vendorScript:watch',
    'vendorStyle:watch',
    e
  );
});