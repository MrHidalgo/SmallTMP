const gulp  = require('gulp'),
  runSequence = require('run-sequence');


/**
 * @description Gulp build - build source files.
 */
gulp.task("build", function(callback) {
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
    'vendorFont',
    callback
  );
});