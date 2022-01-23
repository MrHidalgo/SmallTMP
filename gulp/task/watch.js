'use strict';

const { task, series, parallel } = require('gulp');


const watchCB = (cb) => {
  return parallel(
    'vendorScript:watch',
    'vendorStyle:watch',
    'iconfont:watch',
    'fonts:watch',
    // 'spriteSVG:watch',
    'scss:watch',
    'js:watch',
    // 'html:watch',
    'pug:watch',
    'listPages:watch'
  )(cb);
};


task('watch', watchCB);
