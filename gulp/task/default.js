'use strict';

const { task, series } = require('gulp');


const defaultCB = (cb) => {
  return series(
    'build',
    'watch',
    'server'
  )(cb);
};


task('default', defaultCB);

