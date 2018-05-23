const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  changedInPlace  = require('gulp-changed-in-place'),
  imageMin        = require('gulp-tinypng');

const config      = require('../config/config');

const imageOption = {
  tinyPngAPI : "w2hECd9nCvKWfBj49LZrOPa6Ws7ws8uE",
  changed: {
    firstPass : true
  },
  plum: {
    err: config.errorHandler
  }
};

const srcArr = {
  0: [
    config.src.image + '/*.{png,jpg,jpeg}'
  ],
  1: [
    config.src.image + '/**'
  ]
};

gulp.task("img", function() {
  return gulp
    .src(srcArr[0])
      .pipe(plumber(imageOption.plum))
      .pipe(changedInPlace(imageOption.changed))
      .pipe(imageMin(imageOption.tinyPngAPI))
      .pipe(gulp.dest(config.dest.img));
});

gulp.task('img:watch', function() {
  gulp.watch(srcArr[1], ['img']);
});