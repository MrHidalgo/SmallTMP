const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  mainBowerFiles  = require('main-bower-files'),
  concat          = require('gulp-concat'),
  uglify          = require('gulp-uglify'),
  rename          = require('gulp-rename');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath'),
  opt             = require('../config/configOption');


let files = mainBowerFiles('**/**.js');
files.push(
  pathFolder.src.vendorScript + "/*.js",
  pathFolder.src.vendorScript + "/**/*.js"
);


/**
 * @description Gulp vendor script - concatenation of additional libraries.
 */
gulp.task('vendorScript', function() {
  return gulp
    .src(files)
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(pathFolder.dest.js))
      .pipe(uglify())
      .pipe(rename(opt.renameOption))
      .pipe(gulp.dest(pathFolder.dest.js))
});


/**
 * @description Gulp vendor script watch - keeps track of changes in files.
 */
gulp.task('vendorScript:watch', function() {
  gulp.watch(
    pathFolder.src.vendorScript + '/**',
    ['vendorScript']
  );
});
