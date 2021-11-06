'use strict';

const { task, src, dest, watch, series } = require('gulp');
const plumber = require('gulp-plumber'),
  prefixer = require('gulp-autoprefixer'),
  scss = require('gulp-sass'),
  sassGlob = require('gulp-sass-glob');
const configPath = require('../config/configPath'),
  configOption = require('../config/configOption');


const _scssGulpTask = (_src, _dest) => {
  return src(_src)
    .pipe(plumber(configOption.pipeBreaking.err))
    .pipe(sassGlob())
    .pipe(scss(configOption.sassAPI).on('error', scss.logError))
    .pipe(prefixer(configOption.autoPrefixOptions))
    .pipe(plumber.stop())
    .pipe(dest(_dest))
};


task('scss', (cb) => _scssGulpTask(configPath.src.scss + '/*.scss', configPath.dest.css));


task('scss:watch', (cb) => {
  watch(configPath.src.scss + '/**', series('scss'));

  return cb();
});
