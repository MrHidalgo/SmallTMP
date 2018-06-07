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
  pathFolder.src.image + '/*.{gif, svg}'
];



/**
 * @description Gulp image - GIF and SVG images copy to dest folder.
 */
gulp.task('imgCopy', function() {
  return gulp
    .src(srcPath)
      .pipe(gulp.dest(pathFolder.dest.img));
});


/**
 * @description Gulp image watch - keeps track of changes in files.
 */
gulp.task('imgCopy:watch', function() {
  gulp.watch(
    srcPath,
    ['imgCopy']
  );
});
