'use strict';

const { task, parallel } = require('gulp');


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
    // 'html',
    'pug',
    'listPages'
  )(cb);
};


task('build', buildCB);
