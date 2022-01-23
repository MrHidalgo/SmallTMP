'use strict';

const { task, parallel } = require('gulp');


const defaultCB = (cb) => {
  return parallel(
    'build',
    'watch',
    'server'
  )(cb);
};


task('default', defaultCB);

