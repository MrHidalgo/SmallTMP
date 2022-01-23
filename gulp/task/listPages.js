'use strict';

const { task, src, dest, watch } = require('gulp');

const pug = require('gulp-pug'),
  frontMatter = require('gulp-front-matter'),
  plumber = require('gulp-plumber');

const configPath = require('../config/configPath');

const listCB = () => {
  return src('gulp/task/list/listPages.pug')
    .pipe(plumber(configPath.errorHandler))
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(plumber.stop())
    .pipe(dest(configPath.dest.html));
};


task('listPages', (cb) => {
  listCB();
  cb();
});


task('listPages:watch', (cb) => watch(['src/listPages.pug', 'gulp/task/list/listPages.pug'], listCB));
