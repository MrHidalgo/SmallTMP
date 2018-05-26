const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  rename          = require('gulp-rename'),
  uglify          = require('gulp-uglify'),
  concat          = require('gulp-concat'),
  order           = require("gulp-order"),
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
 * @type {*[]}
 */
const srcPath = [
  pathFolder.src.js + '/*.js',
  pathFolder.src.js + '/**/*.js',
  '!' + pathFolder.src.js + '/**/_**.js',
];


/**
 * @description Gulp Javascript - converting files to current standards.
 */
gulp.task('js', function() {
  return gulp
    .src(srcPath)
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(order(
        [
          "_lib/**",
          "_window/**",
          "_document/**",
          "*",
        ]
      ))
      .pipe(concat('app.js'))
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
    pathFolder.src.js + '/**',
    ['js']
  );
});
