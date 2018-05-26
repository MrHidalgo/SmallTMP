const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  mainBowerFiles  = require('main-bower-files');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath'),
  opt             = require('../config/configOption');


let files = mainBowerFiles('**/**.{eot,svg,ttf,woff,woff2}');
files.push(
  pathFolder.src.vendorScript + "/*.{eot,svg,ttf,woff,woff2}",
  pathFolder.src.vendorScript + "/**/*.{eot,svg,ttf,woff,woff2}"
);


/**
 * @description Gulp vendor script - concatenation of additional libraries.
 */
gulp.task('vendorFont', function() {
  return gulp
    .src(files)
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(gulp.dest(pathFolder.dest.fonts + '/webfonts'))
});