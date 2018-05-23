const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  mainBowerFiles  = require('main-bower-files'),
  concat          = require('gulp-concat'),
  uglify          = require('gulp-uglify'),
  rename          = require('gulp-rename');

const config      = require('../config/config');

const vendorScriptOption = {
  plum: {
    err: config.errorHandler
  },
  renameOption: {
    suffix : '.min'
  }
};

let files = mainBowerFiles('**/**.js');

files.push(config.src.vendorScript + "/*.js");
files.push(config.src.vendorScript + "/**");

gulp.task('vendorScript', function() {
  return gulp
    .src(files)
      .pipe(plumber(vendorScriptOption.plum.err))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(config.dest.js))
      .pipe(uglify())
      .pipe(rename(vendorScriptOption.renameOption))
      .pipe(gulp.dest(config.dest.js))
});

gulp.task('vendorScript:watch', function() {
  gulp.watch(config.src.vendorScript + '/**', ['vendorScript']);
});
