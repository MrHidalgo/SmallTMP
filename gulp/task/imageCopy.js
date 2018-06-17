const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');


/**
 *
 * @type {*[]}
 */
const srcPath = [
  configPath.src.image + '/*.{gif,svg}'
];



/**
 * @description Gulp image copy - GIF and SVG images copy to dest folder.
 */
gulp.task('imgCopy', function() {
  return gulp
    .src(srcPath)
      .pipe(gulp.dest(configPath.dest.img));
});


/**
 * @description Gulp image copy watch - keeps track of changes in files.
 */
gulp.task('imgCopy:watch', function() {
  gulp.watch(
    srcPath,
    ['imgCopy']
  );
});
