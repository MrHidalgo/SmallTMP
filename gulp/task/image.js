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
 * @type {*[]}
 */
const srcPath = [
  pathFolder.src.image + '/*.{png,jpg,jpeg}'
];


/**
 * @description Gulp image - JPEG and PNG images optimized.
 */
gulp.task("img", function() {
  return gulp
    .src(srcPath)
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
    srcPath,
    ['img']
  );
});