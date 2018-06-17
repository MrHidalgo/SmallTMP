const gulp        = require('gulp'),
  pug             = require('gulp-pug'),
  plumber         = require('gulp-plumber'),
  frontMatter     = require('gulp-front-matter'),
  changedInPlace  = require('gulp-changed-in-place');


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
  configPath.src.templates + '/*.pug'
];


/**
 * @description Gulp PUG/JADE - preprocessor for creating html files.
 */
gulp.task('pug', function() {
  return gulp
    .src(srcPath)
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(frontMatter(configOption.frontMatter))
      .pipe(pug(configOption.pug))
      .pipe(changedInPlace(configOption.changed))
      .pipe(gulp.dest(configPath.dest.html))
});


/**
 * @description Gulp PUG/JADE watch - keeps track of changes in files.
 */
gulp.task('pug:watch', function() {
  gulp.watch(
    configPath.src.templates + '/**',
    ['pug']
  );
});
