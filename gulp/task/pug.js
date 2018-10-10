const gulp        = require('gulp'),
	gulpif          = require('gulp-if'),
  pug             = require('gulp-pug'),
  plumber         = require('gulp-plumber'),
  frontMatter     = require('gulp-front-matter'),
  changedInPlace  = require('gulp-changed-in-place'),
	htmlmin         = require('gulp-htmlmin');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 *
 * @type {*[]}
 */
const srcPath = [
  configPath.src.templates + '/*.pug'
];


/**
 * @description Gulp PUG/JADE - preprocessor for creating html files.
 */
gulp.task('pug', function() {
  return gulp
    .src(srcPath)
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(frontMatter({
        property: 'data'
      }))
      .pipe(pug({
        pretty: true,
        data: {
          env : (argv.prod) ? 'production' : ""
        },
      }))
      .pipe(gulpif(argv.prod, htmlmin({
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        removeComments: true
      })))
      .pipe(changedInPlace(configOption.changed))
      .pipe(gulp.dest(configPath.dest.html))
});


/**
 * @description Gulp PUG/JADE watch - keeps track of changes in files.
 */
gulp.task('pug:watch', function() {
  gulp.watch(
    configPath.src.templates + '/**',
    ['pug']
  );
});
