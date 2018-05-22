const gulp  = require('gulp');

const config      = require('../config/config');

const srcArr = {
  0: [
    config.src.fonts + '/*.{ttf,eot,woff,woff2,svg}'
  ],
  1: [
    config.src.fonts + '/**'
  ]
};

gulp.task('fonts', function() {
  return gulp
    .src(srcArr[0])
      .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('fonts:watch', function() {
  gulp.watch(srcArr[1], ['fonts']);
});
