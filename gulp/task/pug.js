const gulp        = require('gulp'),
  pug             = require('gulp-pug'),
  plumber         = require('gulp-plumber'),
  plumberNotifier = require('gulp-plumber-notifier'),
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
    firstPass : true
  }
};


const renderPug = () => {
  return gulp
    .src(config.src.templates + '/*')
      .pipe(plumber({}))
      // .pipe(plumberNotifier({}))
      .pipe(changedInPlace(pugOption.changed))
      .pipe(frontMatter(pugOption.frontMatter))
      .pipe(pug(pugOption.pug))
      .pipe(gulp.dest(config.dest.html))
};


gulp.task('pug', () => {
  return renderPug();
});
