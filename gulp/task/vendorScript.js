'use strict';

const { task, src, dest, watch, series } = require('gulp');
const plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  order = require("gulp-order");
const configPath = require('../config/configPath'),
  configOption = require('../config/configOption');


const _vendorScriptGulpTask = (_src, _dest) => {
  return src(_src)
    .pipe(plumber(configOption.pipeBreaking.err))
    .pipe(order([
      'jquery.min.js',
      '*'
    ]))
    .pipe(concat('vendor.js'))
    .pipe(plumber.stop())
    .pipe(dest(_dest))
};

task('vendorScript', (cb) => {

  const files = [
    configPath.src.vendorScript + "/*.js",
    "!" + configPath.src.vendorScript + "/*.js",
    configPath.src.vendorScript + "/**/*.js",
    "!" + configPath.src.vendorScript + "/**/_**.js"
  ];

  _vendorScriptGulpTask(files, configPath.dest.js);

  return cb();
});


task('vendorScript:watch', (cb) => {
  watch(configPath.src.vendorScript + '/**', series('vendorScript'));

  return cb();
});
