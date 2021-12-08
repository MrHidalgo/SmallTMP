'use strict';

const { promises: fs } = require("fs");

const { task, src, dest, watch, series } = require('gulp');

const consolidate = require('gulp-consolidate'),
  yaml = require('require-yaml');

const configPath  = require('../../config/configPath');

const listPageCB = () => {
  // delete require.cache[require.resolve('../../../src/index.yaml')];
  
  return src(__dirname + '/listPages.html')
    .pipe(consolidate('lodash', {
      pages: '../../../src/index.yaml'
    }))
    .pipe(dest(configPath.dest.root));
};


task('list-pages', (cb) => {
  listPageCB();
  cb();
});

task('list-pages:watch', (cb) => watch('src/index.yaml', listPageCB));
