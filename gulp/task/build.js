'use strict';

const { task, series, parallel } = require('gulp');


const buildCB = (cb) => {
  return parallel(
    'clean',
    'vendorScript',
    'vendorStyle',
    'iconfont',
    'fonts',
    // 'spriteSVG',
    'scss',
    'scss',
    'js',
    'pug',
    // 'list-pages'
  )(cb);
};


task('build', buildCB);
