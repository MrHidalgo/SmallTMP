const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  changedInPlace  = require('gulp-changed-in-place'),
  imageMin        = require('gulp-tinypng');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath'),
  opt             = require('../config/configOption');


/**
 *
 * @type {{"0": *[], "1": *[]}}
 */
const srcPath = {
  0: [
    pathFolder.src.image + '/*.{png,jpg,jpeg}'
  ],
  1: [
    pathFolder.src.image + '/**'
  ]
};


/**
 * @description Gulp image - JPEG and PNG images optimized.
 */
gulp.task("img", function() {
  return gulp
    .src(srcPath[0])
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(changedInPlace(opt.changed))
      .pipe(imageMin(opt.tinyPngAPI))
      .pipe(gulp.dest(pathFolder.dest.img));
});


/**
 * @description Gulp image watch - keeps track of changes in files.
 */
gulp.task('img:watch', function() {
  gulp.watch(
    srcPath[1],
    ['img']
  );
});