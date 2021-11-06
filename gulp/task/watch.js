'use strict';

const { task, parallel } = require('gulp');


const watchCB = (cb) => {
  return parallel(
    'vendorScript:watch',
    'vendorStyle:watch',
    'iconfont:watch',
    'fonts:watch',
    'spriteSVG:watch',
    'scss:watch',
    'js:watch',
    'html:watch',
    'list-pages:watch'
  )(cb);
};


task('watch', watchCB);
