const gulp = require('gulp');


/**
 * @description Gulp main watch - keeps track of changes in files.
 */
gulp.task('watch',
  [
    'scss:watch',
    'pug:watch',
    'js:watch',
    'img:watch',
    'imgCopy:watch',
    'fonts:watch',
    'spritePNG:watch',
    'spriteSVG:watch',
    'vendorScript:watch',
    'vendorStyle:watch',
  ]
);