const gulp        = require('gulp'),
  pug             = require('gulp-pug'),
  plumber         = require('gulp-plumber'),
  frontMatter     = require('gulp-front-matter'),
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
    pathFolder.src.templates + '/*.pug'
  ],
  1: [
    pathFolder.src.templates + '/**'
  ]
};


/**
 * @description Gulp PUG/JADE - preprocessor for creating html files.
 */
gulp.task('pug', function() {
  return gulp
    .src(srcPath[0])
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(frontMatter(opt.frontMatter))
      .pipe(pug(opt.pug))
      .pipe(changedInPlace(opt.changed))
      .pipe(gulp.dest(pathFolder.dest.html))
});


/**
 * @description Gulp PUG/JADE watch - keeps track of changes in files.
 */
gulp.task('pug:watch', function() {
  gulp.watch(
    srcPath[1],
    ['pug']
  );
});
