const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath');


/**
 *
 * @type {*[]}
 */
const srcPath = [
  pathFolder.src.fonts + '/*.{eot,svg,ttf,woff,woff2}'
];



/**
 * @description Gulp fonts - copy fonts to the dest folder.
 */
gulp.task('fonts', function() {
  return gulp
    .src(srcPath)
      .pipe(gulp.dest(pathFolder.dest.fonts));
});


/**
 * @description Gulp fonts watch - keeps track of changes in files.
 */
gulp.task('fonts:watch', function() {
  gulp.watch(
    srcPath,
    ['fonts']
  );
});
