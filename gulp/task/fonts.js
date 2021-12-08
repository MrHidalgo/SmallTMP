'use strict';

const { task, src, dest, watch, series } = require('gulp');

const configPath = require('../config/configPath');

const fontCB = () => {
  return src(configPath.src.fonts + '/**')
    .pipe(dest(configPath.dest.fonts));
};


task('fonts', (cb) => {
  fontCB();
  cb();
});
task('fonts:watch', (cb) => watch(configPath.src.fonts + '/**', fontCB));
