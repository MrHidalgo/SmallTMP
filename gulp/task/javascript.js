const gulp          =   require('gulp'),
  plumber           =   require('gulp-plumber'),
  rename            =   require('gulp-rename'),
  uglify            =   require('gulp-uglify'),
  babel             =   require('gulp-babel'),
  changedInPlace    =   require('gulp-changed-in-place');

const config      = require('../config/config');

const jsOption = {
  plum: {
    err: config.errorHandler
  },
  es6: {
    "presets": ["env"]
  },
  renameOption: {
    suffix : '.min'
  },
  changed: {
    firstPass : true
  }
};

const jsArr = {
  0: [
    config.src.js + '/*.js'
  ],
  1: [
    config.src.js + '/**'
  ]
};

gulp.task('js', function() {
  return gulp
    .src(jsArr[0])
      .pipe(plumber(jsOption.plum.err))
      .pipe(babel(jsOption.es6))
      .pipe(changedInPlace(jsOption.changed))
      .pipe(gulp.dest(config.dest.js))
      .pipe(uglify())
      .pipe(rename(jsOption.renameOption))
      .pipe(gulp.dest(config.dest.js));
});

gulp.task('js:watch', function() {
  gulp.watch(jsArr[1], ['js']);
});
