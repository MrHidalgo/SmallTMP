'use strict';

const { task, src, dest, watch, series } = require('gulp');
const plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  order = require("gulp-order"),
  cleanCSS = require('gulp-clean-css');
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


const _vendorStyleGulpTask = (_src, _dest) => {
  return src(_src)
    .pipe(plumber(configOption.pipeBreaking.err))
    .pipe(order([
      'normalize.css',
      'reset.css',
      '*'
    ]))
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS(configOption.cssMinOption))
    .pipe(plumber.stop())
    .pipe(dest(_dest))
};


task('vendorStyle', (cb) => {

  let files = [
    configPath.src.vendorStyle + "/**.css",
    "!" + configPath.src.vendorStyle + "/**.css",
    configPath.src.vendorStyle + "/**/**.css",
    "!" + configPath.src.vendorStyle + "/**/_**.css"
  ];

  _vendorStyleGulpTask(
    files,
    configPath.dest.css
  );

  return cb();
});


task('vendorStyle:watch', (cb) => {
  watch(configPath.src.vendorStyle + '/!**', series('vendorStyle'));

  return cb();
});
