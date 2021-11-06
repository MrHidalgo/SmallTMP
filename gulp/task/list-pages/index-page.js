'use strict';

const { promises: fs } = require("fs");

const { task, src, dest, watch, series } = require('gulp');

const consolidate = require('gulp-consolidate'),
  yaml = require('require-yaml');

const configPath  = require('../../config/configPath');


task('list-pages', (cb) => {
	delete require.cache[require.resolve('../../../src/index.yaml')];

  let pages = require('../../../src/index.yaml');

  return src(__dirname + '/listPages.html')
    .pipe(consolidate('lodash', {
      pages: pages
    }))
    .pipe(dest(configPath.dest.root));
});

task('list-pages:watch', (cb) => {
  watch('src/index.yaml', series('list-pages'));

  return cb();
});
