const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  changedInPlace  = require('gulp-changed-in-place'),
  imageMin        = require('gulp-tinypng');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 *
 * @type {*[]}
 */
const srcPath = [
  configPath.src.image + '/**'
];


/**
 * @description Gulp image - JPEG and PNG images optimized.
 */
gulp.task("img", function() {
  return gulp
    .src(srcPath)
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(changedInPlace(configOption.changed))
      .pipe(imageMin(configOption.tinyPngAPI))
      .pipe(gulp.dest(configPath.dest.img));
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