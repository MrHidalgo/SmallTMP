'use strict';

const { task, src, dest, watch, series } = require('gulp');

const plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default,
  order = require("gulp-order");

const configPath = require('../config/configPath');


const vendorScriptCB = () => {
  return src([
      configPath.src.vendorScript + "/*.js",
      "!" + configPath.src.vendorScript + "/*.js",
      configPath.src.vendorScript + "/**/*.js",
      "!" + configPath.src.vendorScript + "/**/_**.js"
    ])
    .pipe(plumber(configPath.errorHandler))
    .pipe(order([
      'jquery.min.js',
      '*'
    ]))
    .pipe(concat('vendor.js'))
    .pipe(dest(configPath.dest.js))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(dest(configPath.dest.js))
};


task('vendorScript', (cb) => {
  vendorScriptCB();
  cb();
});
task('vendorScript:watch', (cb) => watch(configPath.src.vendorScript + '/**', vendorScriptCB));
