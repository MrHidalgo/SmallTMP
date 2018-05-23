const gulp = require('gulp');

gulp.task('watch',
  [
    'scss:watch',
    'pug:watch',
    'js:watch',
    'img:watch',
    'fonts:watch',
    'spritePNG:watch',
    'spriteSVG:watch',
    'vendorScript:watch',
    'vendorStyle:watch',
  ]
);