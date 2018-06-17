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
const configPath    = require('../config/configPath'),
  configOption      = require('../config/configOption');


/**
 *
 * @type {{"0": *[], "1": *[]}}
 */
const srcPath = {
  0: [
    configPath.src.scss + '/*.scss'
  ],
  1: [
    configPath.src.scss + '/**'
  ]
};


/**
 * @description Gulp SCSS - preprocessor for creating style files.
 */
gulp.task('scss', function() {
  return gulp
    .src(srcPath[0])
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(sourcemaps.init())
      .pipe(scss(configOption.sassAPI).on('error', scss.logError))
      .pipe(prefixer(configOption.autoPrefixOptions))
      .pipe(stripCssComments())
      .pipe(changedInPlace(configOption.changed))
      .pipe(sourcemaps.write('./maps', configOption.sourceMapStyle))
      .pipe(gulp.dest(configPath.dest.css))
      .pipe(gulpIgnore.exclude("*.map"))
      .pipe(cssmin(configOption.cssMinOption))
      .pipe(rename(configOption.renameOption))
      .pipe(gulp.dest(configPath.dest.css));
});


/**
 * @description Gulp SCSS watch - keeps track of changes in files.
 */
gulp.task('scss:watch', function() {
  gulp.watch(
    configPath.src.scss + '/**',
    ['scss']
  );
});
