const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath');


/**
 *
 * @type {{"0": *[], "1": *[]}}
 */
const srcPath = {
  0: [
    pathFolder.src.fonts + '/*.{ttf,eot,woff,woff2,svg}'
  ],
  1: [
    pathFolder.src.fonts + '/**'
  ]
};


/**
 * @description Gulp fonts - copy fonts to the dest folder.
 */
gulp.task('fonts', function() {
  return gulp
    .src(srcPath[0])
      .pipe(gulp.dest(pathFolder.dest.fonts));
});


/**
 * @description Gulp fonts watch - keeps track of changes in files.
 */
gulp.task('fonts:watch', function() {
  gulp.watch(
    srcPath[1],
    ['fonts']
  );
});
