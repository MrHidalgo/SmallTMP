'use strict';

const { task, src, dest, watch, series } = require('gulp');

const plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),
  fileInclude = require('gulp-file-include');

const configPath = require('../config/configPath'),
  configOption = require('../config/configOption');


const templateCB = () => {
  return src(configPath.src.html + '/*.html')
    .pipe(changed(configPath.src.html + '/*.html'))
    .pipe(plumber(configOption.pipeBreaking.err))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(plumber.stop())
    .pipe(dest(configPath.dest.html));
};


task('html', (cb) => {
  templateCB();
  cb();
});
task('html:watch', (cb) => watch([configPath.src.html + '/**', configPath.src.html + '/**/**', configPath.src.html + '/**/**/**',], templateCB));
