const gulp        = require('gulp'),
  pug             = require('gulp-pug'),
  plumber         = require('gulp-plumber'),
  frontMatter     = require('gulp-front-matter'),
  changedInPlace  = require('gulp-changed-in-place');

const config      = require('../config/config');

const pugOption = {
  pug : {
    pretty : true
  },
  frontMatter: {
    property: 'data'
  },
  changed: {
    firstPass : true,
    howToDetermineDifference: "modification-time"
  },
  plum: {
    err: config.errorHandler
  }
};

const srcArr = {
  0: [
    config.src.templates + '/*.pug'
  ],
  1: [
    config.src.templates + '/**/*.pug',
    config.src.templates + '/**/**/**'
  ]
};


const renderPug = (e) => {
  return gulp
    .src(srcArr[0])
      .pipe(plumber(pugOption.plum.err))
      .pipe(changedInPlace(pugOption.changed))
      .pipe(frontMatter(pugOption.frontMatter))
      .pipe(pug(pugOption.pug))
      .pipe(gulp.dest(config.dest.html))
};


gulp.task('pug', function() {
  renderPug();
});

gulp.task('pug:watch', function() {
  gulp.watch(srcArr[1], ['pug']);
});
