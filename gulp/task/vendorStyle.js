const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  mainBowerFiles  = require('main-bower-files'),
  concat          = require('gulp-concat'),
  order           = require("gulp-order"),
  cssmin          = require('gulp-cssmin'),
  rename          = require('gulp-rename');

const config      = require('../config/config');

const vendorStyleOption = {
  plum: {
    err: config.errorHandler
  },
  cssMinOption: {
    showLog : true,
    compatibility : 'ie7',
    specialComments : 1,
    format: 'beautify',
    level: 2
  },
  renameOption: {
    suffix : '.min'
  }
};

let files = mainBowerFiles('**/**.css');

files.push(config.src.vendorStyle + "/*.css");
files.push(config.src.vendorStyle + "/**");

gulp.task('vendorStyle', function() {
  return gulp
    .src(files)
      .pipe(plumber(vendorStyleOption.plum.err))
      .pipe(order(
        [
          'normalize.css',
          '*'
        ]
      ))
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest(config.dest.css))
      .pipe(cssmin(vendorStyleOption.cssMinOption))
      .pipe(rename(vendorStyleOption.renameOption))
      .pipe(gulp.dest(config.dest.css))
});

gulp.task('vendorStyle:watch', function() {
  gulp.watch(config.src.vendorStyle + '/**', ['vendorStyle']);
});
