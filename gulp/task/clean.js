const gulp        = require('gulp'),
  del             = require('del');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath');


/**
 * @description Gulp clean - clean dest folder before build project.
 */
gulp.task('clean', function() {
  return del.sync([
    pathFolder.dest.root + '/**/*',
    pathFolder.src.root + '/img/**',
    '!' + pathFolder.dest.root + '/img',
    '!' + pathFolder.dest.root + '/img/**/*',
    '!' + pathFolder.src.root + '/img'
  ]);
});