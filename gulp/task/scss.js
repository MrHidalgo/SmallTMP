const gulp          = require('gulp'),
  plumber           = require('gulp-plumber'),
  prefixer          = require('gulp-autoprefixer'),
  scss              = require('gulp-sass'),
  stripCssComments  = require('gulp-strip-css-comments'),
  sourcemaps        = require('gulp-sourcemaps'),
  cssmin            = require('gulp-cssmin'),
  rename            = require('gulp-rename'),
  gulpIgnore        = require('gulp-ignore'),
  changedInPlace    = require('gulp-changed-in-place');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder    = require('../config/configPath'),
  opt               = require('../config/configOption');


/**
 *
 * @type {{"0": *[], "1": *[]}}
 */
const srcPath = {
  0: [
    pathFolder.src.scss + '/*.scss'
  ],
  1: [
    pathFolder.src.scss + '/**'
  ]
};


/**
 * @description Gulp SCSS - preprocessor for creating style files.
 */
gulp.task('scss', function() {
  return gulp
    .src(srcPath[0])
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(sourcemaps.init())
      .pipe(scss(opt.sassAPI).on('error', scss.logError))
      .pipe(prefixer(opt.autoPrefixOptions))
      .pipe(stripCssComments())
      .pipe(changedInPlace(opt.changed))
      .pipe(sourcemaps.write('./maps', opt.sourceMapStyle))
      .pipe(gulp.dest(pathFolder.dest.css))
      .pipe(gulpIgnore.exclude("*.map"))
      .pipe(cssmin(opt.cssMinOption))
      .pipe(rename(opt.renameOption))
      .pipe(gulp.dest(pathFolder.dest.css));
});


/**
 * @description Gulp SCSS watch - keeps track of changes in files.
 */
gulp.task('scss:watch', function() {
  gulp.watch(
    pathFolder.src.scss + '/**',
    ['scss']
  );
});
