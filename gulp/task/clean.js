'use strict';

const { task } = require('gulp');

const del = require('del');

const configPath  = require('../config/configPath');


task('clean', (cb) => {

  async function innerCB() {
    let _listPathArr = [
      configPath.dest.root + '/**/*',
      '!' + configPath.dest.root + '/img',
      '!' + configPath.dest.root + '/img/**/*',
      '!' + configPath.dest.root + '/media',
      '!' + configPath.dest.root + '/media/**/*',
      '!' + configPath.dest.root + '/icon',
      '!' + configPath.dest.root + '/icon/**/*',
    ];

    await del.sync(_listPathArr);
  }

  innerCB();

  return cb();
});
