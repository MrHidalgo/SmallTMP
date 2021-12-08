'use strict';

const { task, src, dest, watch, series } = require('gulp');

const plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  order = require("gulp-order"),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano');

const configPath  = require('../config/configPath');


const vendorStyleCB = () => {
  return src([
      configPath.src.vendorStyle + "/**.css",
      "!" + configPath.src.vendorStyle + "/**.css",
      configPath.src.vendorStyle + "/**/**.css",
      "!" + configPath.src.vendorStyle + "/**/_**.css"
    ])
    .pipe(plumber(configPath.errorHandler))
    .pipe(order([
      'normalize.css',
      'reset.css',
      '*'
    ]))
    .pipe(concat('vendor.css'))
    .pipe(dest(configPath.dest.css))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cssnano())
    .pipe(plumber.stop())
    .pipe(dest(configPath.dest.css));
};


task('vendorStyle', (cb) => {
  vendorStyleCB();
  cb();
});


task('vendorStyle:watch', (cb) => watch(configPath.src.vendorStyle + '/!**', vendorStyleCB));
