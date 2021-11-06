'use strict';

const { task, src, dest, watch, series } = require('gulp');
const configPath = require('../config/configPath');


task('fonts', (cb) => src(configPath.src.fonts + '/**').pipe(dest(configPath.dest.fonts)));


task('fonts:watch', (cb) => {
  watch(configPath.src.fonts + '/**', series('fonts'));

  return cb();
});
