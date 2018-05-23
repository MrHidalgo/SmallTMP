const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  rename          = require('gulp-rename'),
  uglify          = require('gulp-uglify'),
  babel           = require('gulp-babel'),
  changedInPlace  = require('gulp-changed-in-place');


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
    pathFolder.src.js + '/*.js'
  ],
  1: [
    pathFolder.src.js + '/**'
  ]
};


/**
 * @description Gulp Javascript - converting files to current standards.
 */
gulp.task('js', function() {
  return gulp
    .src(srcPath[0])
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(babel(opt.es6))
      .pipe(changedInPlace(opt.changed))
      .pipe(gulp.dest(pathFolder.dest.js))
      .pipe(uglify())
      .pipe(rename(opt.renameOption))
      .pipe(gulp.dest(pathFolder.dest.js));
});


/**
 * @description Gulp Javascript watch - keeps track of changes in files.
 */
gulp.task('js:watch', function() {
  gulp.watch(
    srcPath[1],
    ['js']
  );
});
