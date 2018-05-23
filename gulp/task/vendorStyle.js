const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  mainBowerFiles  = require('main-bower-files'),
  concat          = require('gulp-concat'),
  order           = require("gulp-order"),
  cssMinify       = require('gulp-cssmin'),
  rename          = require('gulp-rename');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath'),
  opt             = require('../config/configOption');


let files = mainBowerFiles('**/**.css');
files.push(
  pathFolder.src.vendorStyle + "/*.css",
  pathFolder.src.vendorStyle + "/**"
);


/**
 * @description Gulp vendor style - concatenation of additional libraries.
 */
gulp.task('vendorStyle', function() {
  return gulp
    .src(files)
      .pipe(plumber(opt.pipeBreaking.err))
      .pipe(order([
          'normalize.css',
          '*'
      ]))
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest(pathFolder.dest.css))
      .pipe(cssMinify(opt.cssMinOption))
      .pipe(rename(opt.renameOption))
      .pipe(gulp.dest(pathFolder.dest.css))
});


/**
 * @description Gulp vendor style watch - keeps track of changes in files.
 */
gulp.task('vendorStyle:watch', function() {
  gulp.watch(
    pathFolder.src.vendorStyle + '/**',
    ['vendorStyle']
  );
});
