'use strict';

const { task, src, dest, watch, series } = require('gulp');
const plumber = require('gulp-plumber'),
  fileInclude = require('gulp-file-include');
const configPath = require('../config/configPath'),
  configOption = require('../config/configOption');


const _templateGulpTask = (_src, _dest) => {
  return src(_src)
    .pipe(plumber(configOption.pipeBreaking.err))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(plumber.stop())
    .pipe(dest(_dest));
};


task('html', (cb) => _templateGulpTask(configPath.src.html + '/*.html', configPath.dest.html));


task('html:watch', (cb) => {
  watch(
    [
      configPath.src.html + '/**',
      configPath.src.html + '/**/**',
      configPath.src.html + '/**/**/**',
    ],
    series('html')
  );

  return cb();
});
